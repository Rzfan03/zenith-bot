import 'dotenv/config'
import { createConnection } from './connection.js'
import { generateReply } from './responses.js'
import { addMessage, getHistory } from './store.js'

function extractText(msg) {
  if (msg.message?.conversation) return msg.message.conversation
  if (msg.message?.extendedTextMessage?.text) return msg.message.extendedTextMessage.text
  return ''
}

function isGroup(jid) {
  return jid.endsWith('@g.us')
}

function getName(msg) {
  return msg.pushName || msg.key.remoteJid.split('@')[0]
}

function shortJid(jid) {
  return jid?.split('@')[0]
}

function normalizeNumber(jid) {
  return jid?.split(':')[0]?.split('@')[0]
}

function timestamp() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

const sentIds = new Set()
let myJid = null
let myNumber = null

function isSelfChat(jid) {
  return myNumber && normalizeNumber(jid) === myNumber
}

async function handleMessage(sock, msg, upsertType = 'notify') {
  try {
    if (!msg.message) return

    const msgId = msg.key?.id
    if (msgId && sentIds.has(msgId)) {
      sentIds.delete(msgId)
      return
    }

    if (upsertType === 'append' && msg.messageTimestamp && Date.now() / 1000 - msg.messageTimestamp > 30) return

    const jid = msg.key.remoteJid
    const name = getName(msg)
    const short = shortJid(jid)

    if (isGroup(jid)) return

    const text = extractText(msg)
    if (!text) {
      console.log(`[${timestamp()}] ⏭️ ${short}: non-text message`)
      return
    }

    if (isSelfChat(jid) && text.startsWith('!')) {
      console.log(`[${timestamp()}] ⚡ ${short}: ${text}`)
      return
    }

    console.log(`[${timestamp()}] 📩 ${name} (${short}): ${text}`)

    addMessage(jid, 'user', text)

    const history = getHistory(jid)
    const reply = await generateReply(history, jid)

    const notify = reply.includes('[NOTIFY]')
    const cleanReply = reply.replace('[NOTIFY]', '').trim()

    console.log(`[${timestamp()}] 🤖 -> ${short}: ${cleanReply}`)
    const sent = await sock.sendMessage(jid, { text: cleanReply })
    if (sent?.key?.id) sentIds.add(sent.key.id)
    addMessage(jid, 'assistant', cleanReply)

    if (notify && myJid) {
      const pesan = history[history.length - 1]?.content || text
      const n1 = await sock.sendMessage(myJid, { text: `🚨 *ADA YANG BUTUH LO, BANG!*` })
      if (n1?.key?.id) sentIds.add(n1.key.id)
      const n2 = await sock.sendMessage(myJid, { text: `👤 *${name}*\n💬 ${pesan}\n\nBalas aja langsung ke chat mereka.` })
      if (n2?.key?.id) sentIds.add(n2.key.id)
      console.log(`[${timestamp()}] 🔔 Notifikasi dikirim ke self-chat`)
    }
  } catch (err) {
    console.error(`[${timestamp()}] ❌ ERROR:`, err?.message || err)
    if (err?.stack) console.error(err.stack)
  }
}

createConnection(handleMessage, (jid, sock) => {
  myJid = jid
  myNumber = normalizeNumber(jid)
  console.log(`[${timestamp()}] 🆔 My JID: ${jid}`)
  console.log(`[${timestamp()}] 📱 My Number: ${myNumber}`)
  console.log(`[${timestamp()}] ✅ Bot siap!`)
})
