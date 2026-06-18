const pools = {
  greeting: [
    'Halo {address}, ada yang bisa Zenn bantu?',
    'Hai {address}, ada perlu apa?',
    'Halo {address}, salam kenal ya',
    'Hai {address}, Zenn di sini bantu Rizfan',
    'Halo juga {address}, ada yang bisa dibantu?',
    'Hai {address}, ada perlu apa nih?',
    'Halo {address}, Zenn siap bantu',
    'Hei {address}, ada yang bisa Zenn bantu?',
    'Halo {address}, selamat datang',
    'Hai {address}, senang bisa bantu',
    'Halo {address}, Zenn asistennya Rizfan',
    'Hai-hai {address}, ada apa?',
    'Halo {address}, gimana ada yang bisa dibantu?',
    'Hai {address}, ada yang Zenn bisa urus?',
    'Halo {address}, Zenn di sini',
    'Hai {address}, lagi ada perlu apa?',
    'Halo {address}, ada yang bisa Zenn bantu hari ini?',
    'Hai juga {address}, ada yang Zenn bisa bantu?',
    'Halo {address}, santai aja ya. Ada yang bisa dibantu?',
    'Hai {address}, Zenn tunggu aja nih. Ada perlu?',
    'Halo {address}, maaf Bang Riz lagi sibuk. Ada yang Zenn bisa bantu?',
    'Hai {address}, silakan cerita aja, Zenn dengerin',
    'Halo {address}, senang kenal sama kamu',
    'Hai {address}, Zenn online bantu-bantu. Ada perlu?',
  ],

  confirmation: [
    'Siap {address}, dilaksanakan',
    'Baik {address}, noted',
    'Oke {address}, siap',
    'Noted {address}, aman',
    'Siap {address}, pasti',
    'Baik {address}, Zenn catat ya',
    'Oke {address}, siap laksanakan',
    'Siap bos!',
    'Baik {address}, ada lagi yang bisa dibantu?',
    'Oke-oke {address}, siap',
    'Noted {address}, semoga lancar',
    'Siap {address}, ditunggu ya',
    'Baik {address}, Zenn tunggu aja',
    'Oke {address}, aman terkendali',
    'Siap {address}, jangan khawatir',
    'Baik {address}, oke siap',
    'Noted bang, siap',
    'Oke {address}, Zenn urus',
    'Siap {address}, kalau ada apa-apa bilang ya',
    'Baik {address}, semoga dimudahkan',
    'Oke {address}, semangat terus',
    'Siap {address}, Zenn di sini kalo butuh',
    'Baik {address}, laporan diterima',
    'Noted {address}, Zenn tungguin',
  ],

  thanks: [
    'Sama-sama {address}, senang bisa bantu',
    'Kembali kasih {address}, semoga membantu',
    'Iya {address}, sama-sama',
    'Sama-sama {address}, jangan sungkan ya',
    'Sama-sama {address}, happy to help!',
    'Kembali kasih {address}, semoga harimu menyenangkan',
    'Iya {address}, senang bisa bantu',
    'Sama-sama {address}, kapan aja',
    'Sama-sama {address}, Zenn di sini kalo butuh bantuan',
    'Iya {address}, senang bantu-bantu',
    'Sama-sama {address}, semoga lancar urusannya',
    'Kembali kasih {address}, jangan sungkan chat aja',
    'Sama-sama {address}, semoga membantu ya',
    'Iya {address}, sama-sama, semoga beres',
    'Sama-sama {address}, kalau ada apa-apa bilang aja',
    'Kembali kasih {address}, seiklasnya aja',
    'Sama-sama {address}, semangat terus yak',
    'Iya {address}, kapan aja butuh bantuan bilang ya',
    'Sama-sama {address}, Zenn 24 jam siaga',
    'Iya {address}, sama-sama, ditunggu ya kalo ada perlu lagi',
    'Sama-sama {address}, happy bisa bantu',
    'Kembali kasih {address}, Zenn di sini aja',
    'Sama-sama {address}, seneng bisa bantu Rizfan',
    'Iya {address}, sama-sama, semoga harimu indah',
  ],

  goodbye: [
    'Dadah {address}, hati-hati ya',
    'Sampai jumpa {address}, semoga harimu menyenangkan',
    'Dadah {address}, jaga kesehatan',
    'Bye {address}, salam buat keluarga',
    'Dadah {address}, semoga sukses selalu',
    'Sampai ketemu lagi {address}',
    'Dadah {address}, kapan-kapan chat lagi ya',
    'Bye {address}, hati-hati di jalan',
    'Assalamualaikum {address}',
    'Dadah {address}, semoga lancar semua',
    'Sampai jumpa {address}, senang ngobrol sama kamu',
    'Bye {address}, jaga diri ya',
    'Dadah {address}, sukses selalu',
    'Assalamualaikum {address}, hati-hati ya',
    'Sampai ketemu lagi {address}, semoga harimu indah',
    'Bye {address}, kalo butuh bantuan chat aja',
    'Dadah {address}, semoga dimudahkan semua urusannya',
    'Sampai jumpa {address}, jangan lupa senyum',
    'Bye bye {address}, salam buat semuanya',
    'Dadah {address}, Zenn tunggu chat berikutnya',
    'Sampai ketemu lagi {address}, hati-hati selalu',
    'Bye {address}, semoga semua berjalan lancar',
    'Assalamualaikum {address}, jaga kesehatan ya',
    'Dadah {address}, senang bisa ngobrol sama kamu',
  ],

  howAreYou: [
    'Alhamdulillah baik {address}, kalo {address} gimana?',
    'Baik {address}, sehat selalu. {address} gimana kabarnya?',
    'Alhamdulillah baik, {address} gimana?',
    'Baik {address}, Zenn siap bantu terus. {address} sendiri gimana?',
    'Alhamdulillah sehat {address}, ada yang bisa dibantu?',
    'Baik {address}, semoga {address} juga baik-baik aja',
    'Alhamdulillah baik, Zenn di sini bantu-bantu Rizfan. Ada perlu?',
    'Sehat {address}, makasih tanya. {address} gimana?',
    'Baik {address}, Alhamdulillah. Ada yang Zenn bisa bantu?',
    'Alhamdulillah baik {address}, {address} lagi apa?',
    'Baik {address}, Zenn selalu siap. Gimana dengan {address}?',
    'Sehat {address}, Alhamdulillah. {address} sehat?',
    'Baik banget {address}, ada yang bisa dibantu?',
    'Alhamdulillah baik {address}, ada perlu apa?',
    'Baik {address}, semoga {address} juga selalu sehat',
    'Alhamdulillah sehat {address}, {address} gimana ceritanya?',
    'Baik {address}, lagi on call bantu-bantu orang. Ada perlu?',
    'Sehat {address}, Alhamdulillah. Ada yang Zenn urus?',
    'Alhamdulillah baik {address}, kalo ada perlu bilang aja',
    'Baik {address}, happy mode on. Ada yang bisa dibantu?',
    'Alhamdulillah sehat wal afiat, {address} gimana?',
    'Baik {address}, Zenn siap 24 jam. Ada perlu apa nih?',
    'Sehat {address}, lagi santai balesin chat. {address} gimana?',
    'Alhamdulillah baik {address}, makasih udah nanya',
  ],

  aboutRizfan: [
    'Rizfan lagi sibuk {address}, ada yang bisa Zenn bantu?',
    'Bang Riz lagi off dulu {address}, Zenn yang handle. Ada perlu?',
    'Rizfan lagi fokus kerja {address}, titip pesan aja?',
    'Maaf {address}, Bang Riz lagi sibuk, Zenn yang gantian.',
    'Rizfan lagi istirahat {address}, ada yang penting? Bisa Zenn catat.',
    'Bang Riz lagi ada kegiatan {address}, titip pesan aja nanti Zenn sampaikan.',
    'Rizfan lagi unavailable {address}, tapi Zenn di sini bantu.',
    'Maaf {address}, Rizfan belum bisa on WA sekarang. Ada yang Zenn bantu?',
    'Rizfan lagi sibuk {address}, kalo penting banget Zenn notifikasiin dia [NOTIFY]',
    'Bang Riz lagi fokus {address}, Zenn yang jaga chat. Ada perlu?',
    'Rizfan lg off {address}, titip pesan aja nanti Zenn sampaikan [NOTIFY]',
    'Maaf {address}, Rizfan lagi ga pegang HP. Ada yang Zenn bantu?',
    'Rizfan lagi sibuk kerja {address}, ada perlu penting? [NOTIFY]',
    'Bang Riz lagi istirahat {address}, Zenn yang on duty',
    'Rizfan lg unavailable {address}, kalo urgent Zenn kabarin dia [NOTIFY]',
    'Maaf {address}, Rizfan lagi sibuk. Titip pesan aja ya?',
    'Rizfan lg ada acara {address}, Zenn di sini bantu.',
    'Bang Riz lagi ngurus sesuatu {address}, Zenn yang handle dulu',
    'Rizfan lagi sibuk {address}, tapi tenang aja Zenn di sini',
    'Maaf {address}, Rizfan belum bisa WA sekarang. Penting? Bisa Zenn catat. [NOTIFY]',
    'Rizfan lg fokus {address}, kalo darurat Zenn kabarin langsung [NOTIFY]',
    'Bang Riz lagi offline {address}, Zenn yang jaga. Ada perlu?',
    'Rizfan lagi sibuk nih {address}, titip pesan aja ya?',
    'Maaf {address}, Rizfan lg ga bisa bales. Ada yang Zenn bisa bantu?',
  ],

  fallback: [
    'Baik {address}, Zenn catat ya',
    'Oke {address}, noted',
    'Baik {address}, ada lagi yang bisa dibantu?',
    'Siap {address}, Zenn tunggu aja',
    'Oke {address}, kalau ada perlu bilang aja ya',
    'Baik {address}, siap',
    'Noted {address}, jangan khawatir',
    'Baik {address}, semoga harimu menyenangkan',
    'Oke {address}, ditunggu aja',
    'Siap {address}, Zenn di sini',
    'Baik {address}, Zenn catat',
    'Oke {address}, siap dilaksanakan',
    'Siap {address}, aman terkendali',
    'Baik {address}, semoga lancar',
    'Oke {address}, Zenn siap bantu',
    'Noted {address}, siap',
    'Baik {address}, ada lagi?',
    'Siap {address}, kalau ada apa-apa bilang ya',
    'Oke {address}, Zenn tungguin',
    'Baik {address}, siap dijalankan',
    'Siap {address}, semangat terus ya',
    'Oke {address}, Zenn doain yang terbaik',
    'Noted {address}, semoga dimudahkan',
    'Baik {address}, ditunggu ya kalo ada perlu lagi',
  ],
}

const patterns = [
  { keys: ['greeting'], test: (t) => /^(halo|hai|hey|hi|helo|pagi|siang|sore|malam|assalamualaik|assalamu'alaikum|testing|tes\b)/i.test(t) },
  { keys: ['goodbye'], test: (t) => /^(dadah|daah|dah|bye|by|babay|sampai jumpa|sampai ketemu|da\b)/i.test(t) },
  { keys: ['thanks'], test: (t) => /^(makasih|terima kasih|thanks|thank\s?you|thx|makasi|mksh|trims|trimakasih|tengkyu|tq)/i.test(t) },
  { keys: ['aboutRizfan'], test: (t) => /(\brizfan\b|\briz\b(?!\w)|rizfan mana|rizfan dimana|cari rizfan|mana rizfan|rizfan lagi apa|rizfan nya|rizfan lg|rizfan gak|rizfan ga)/i.test(t) },
  { keys: ['howAreYou'], test: (t) => /(apa kabar|gimana kabar|kabar(\s|$)|apa khabar|gmna kabar|lagi apa|lagi ngapain|lagi pada ngapain)/i.test(t) },
]

const userData = new Map()

function detectCategory(text) {
  const t = text.toLowerCase().trim()
  if (!t) return 'fallback'

  for (const p of patterns) {
    if (p.test(t)) return p.keys[0]
  }

  const lastChar = t.slice(-1)
  if (/^(iy|iya|iyaa|iyy|iyee|y|ya|yaa|yo|yoi|ok|oke|okey|okay|oki|owkey|oh|ooh|ohh|siap|iyes|yes)$/i.test(t)) {
    return 'confirmation'
  }

  return 'fallback'
}

function detectAddress(text) {
  const t = text.toLowerCase()
  if (/\bbang\b/.test(t)) return 'bang'
  if (/\bkak\b/.test(t)) return 'kak'
  if (/\bmass\b|\bmas\b/.test(t)) return 'mas'
  if (/\bmbak?\b/.test(t)) return 'mbak'
  return null
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function personalize(text, address) {
  const addr = address || 'kak'
  return text.replace(/\{address\}/g, addr)
}

export function generateReply(history, jid) {
  const lastMsg = history[history.length - 1]?.content || ''

  const detected = detectAddress(lastMsg)
  if (detected) {
    const existing = userData.get(jid) || {}
    userData.set(jid, { ...existing, address: detected })
  }

  const data = userData.get(jid) || {}
  const address = data.address || null
  const category = detectCategory(lastMsg)
  const pool = pools[category] || pools.fallback
  const response = pickRandom(pool)

  return personalize(response, address)
}
