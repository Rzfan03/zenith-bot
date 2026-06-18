import { makeWASocket, useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys'
import { Boom } from '@hapi/boom'
import pino from 'pino'
import qrcode from 'qrcode-terminal'

const logger = pino({ level: 'silent' })
const SESSION_DIR = 'session'

export async function createConnection(onMessage, onOpen) {
  const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR)

  const sock = makeWASocket({
    auth: state,
    logger,
    browser: ['ZennBot', 'Chrome', '1.0'],
    syncFullHistory: false
  })

  // Set JID early from saved session (avoids race with connection.open)
  const initialJid = state.creds?.me?.id
  if (initialJid && onOpen) onOpen(initialJid, sock)

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
    if (qr) {
      console.clear()
      console.log('╔══════════════════════════════════════╗')
      console.log('║     SCAN QR CODE INI DENGAN WA      ║')
      console.log('║   Buka WA > Titik 3 > Perangkat     ║')
      console.log('║        Tertaut > Scan QR            ║')
      console.log('╚══════════════════════════════════════╝')
      qrcode.generate(qr, { small: true })
    }

    if (connection === 'close') {
      const err = lastDisconnect?.error
      console.log('[DISCONNECT]', err?.message || 'Unknown error')
      const shouldReconnect = err instanceof Boom &&
        err.output.statusCode !== DisconnectReason.loggedOut
      if (shouldReconnect) {
        console.log('[RECONNECT] Koneksi terputus, reconnect dalam 5 detik...')
        setTimeout(() => createConnection(onMessage, onOpen), 5000)
      } else {
        console.log('[LOGGED OUT] Scan QR lagi.')
      }
    }

    if (connection === 'open') {
      if (onOpen) onOpen(state.creds?.me?.id, sock)
      console.log(`
╔══════════════════════════════════════╗
║     ✅ ZENN SIAP!                    ║
║     Asisten pribadi Rizfan           ║
╚══════════════════════════════════════╝
      `)
    }
  })

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    console.log(`[events] messages.upsert type=${type} count=${messages.length}`)
    for (const msg of messages) {
      const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '(non-text)'
      console.log(`[events]   msg id=${msg.key?.id} fromMe=${msg.key?.fromMe} jid=${msg.key?.remoteJid} text="${(text+'').slice(0,40)}"`)
      try {
        await onMessage(sock, msg, type)
      } catch (err) {
        console.error('[ERROR]', err)
      }
    }
  })

  process.on('uncaughtException', (err) => console.error('[UNCAUGHT]', err))
  process.on('unhandledRejection', (err) => console.error('[UNHANDLED]', err))

  return sock
}
