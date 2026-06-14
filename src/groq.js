import axios from 'axios'
import { getSystemPrompt } from './personality.js'

const GROQ_API = 'https://api.groq.com/openai/v1/chat/completions'

const api = axios.create({
  baseURL: GROQ_API,
  headers: {
    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    'Content-Type': 'application/json'
  }
})

export async function generateReply(history) {
  const messages = [
    { role: 'system', content: getSystemPrompt() },
    ...history
  ]

  try {
    const { data } = await api.post('', {
      model: 'llama-3.3-70b-versatile',
      messages,
      temperature: 0.8,
      max_tokens: 256
    })
    return data.choices[0].message.content
  } catch (err) {
    console.error('[GROQ ERROR]', err?.response?.data || err.message)
    return 'maap error jir, coba lagi nanti'
  }
}
