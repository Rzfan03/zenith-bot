import { makeWASocket, useMultiFileAuthState, DisconnectReason } from '@whiskeysockets/baileys'
import { Boom } from '@hapi/boom'
import pino from 'pino'

const logger = pino({ level: 'silent' })
const SESSION_DIR = 'session'

export async function createConnection(onMessage) {
  const { state, saveCreds } = await useMultiFileAuthState(SESSION_DIR)

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    logger,
    browser: ['Butik', 'Chrome', '1.0'],
    syncFullHistory: true
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', ({ connection, lastDisconnect, qr }) => {
    if (qr) {
      console.clear()
      console.log('╔══════════════════════════════════════╗')
      console.log('║     SCAN QR CODE INI DENGAN WA      ║')
      console.log('║   Buka WA > Titik 3 > Perangkat     ║')
      console.log('║        Tertaut > Scan QR            ║')
      console.log('╚══════════════════════════════════════╝')
    }

    if (connection === 'close') {
      const shouldReconnect = lastDisconnect?.error instanceof Boom &&
        lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut
      if (shouldReconnect) {
        console.log('[RECONNECT] Koneksi terputus, reconnect dalam 5 detik...')
        setTimeout(() => createConnection(onMessage), 5000)
      } else {
        console.log('[LOGGED OUT] Scan QR lagi.')
      }
    }

    if (connection === 'open') {
      console.log(`
╔══════════════════════════════════════╗
║     ✅ BUTIK SIAP!                   ║
║     Bot WA Pribadi Rizfan            ║
╚══════════════════════════════════════╝
      `)
    }
  })

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return
    for (const msg of messages) {
      try {
        onMessage(sock, msg)
      } catch (err) {
        console.error('[ERROR]', err)
      }
    }
  })

  process.on('uncaughtException', (err) => console.error('[UNCAUGHT]', err))
  process.on('unhandledRejection', (err) => console.error('[UNHANDLED]', err))

  return sock
}
