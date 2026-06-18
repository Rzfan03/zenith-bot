import { generateReply } from './src/responses.js'

console.log('=== TEST RESPONSES ===')
console.log('Ketik "exit" untuk keluar\n')

const history = []
const testJid = 'test@mock'

process.stdin.on('data', async (input) => {
  const text = input.toString().trim()
  if (text === 'exit') process.exit(0)

  history.push({ role: 'user', content: text })
  const reply = await generateReply(history, testJid)
  console.log(`🤖 > ${reply}\n`)
  history.push({ role: 'assistant', content: reply })
})
