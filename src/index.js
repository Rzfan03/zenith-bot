import 'dotenv/config'
import { createConnection } from './connection.js'
import { startTimer, cancelTimer } from './timer.js'
import { generateReply } from './groq.js'
import { addMessage, getHistory } from './store.js'

function extractText(msg) {
  if (msg.message?.conversation) return msg.message.conversation
  if (msg.message?.extendedTextMessage?.text) return msg.message.extendedTextMessage.text
  return ''
}

function isGroup(jid) {
  return jid.endsWith('@g.us')
}

async function handleMessage(sock, msg) {
  if (!msg.message) return

  const jid = msg.key.remoteJid

  if (isGroup(jid)) return

  if (msg.key.fromMe) {
    cancelTimer(jid)
    return
  }

  const text = extractText(msg)
  if (!text) return

  addMessage(jid, 'user', text)

  startTimer(jid, async (jid) => {
    const history = getHistory(jid)
    const reply = await generateReply(history)
    if (reply) {
      await sock.sendMessage(jid, { text: reply })
      addMessage(jid, 'assistant', reply)
    }
  })
}

createConnection(handleMessage)
