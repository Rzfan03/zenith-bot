const MAX_HISTORY = 20
const RESET_HOURS = 24

const conversations = new Map()

export function addMessage(jid, role, content) {
  if (!conversations.has(jid)) {
    conversations.set(jid, [])
  }
  const history = conversations.get(jid)
  history.push({ role, content, timestamp: Date.now() })
  if (history.length > MAX_HISTORY) {
    history.shift()
  }
}

export function getHistory(jid) {
  const history = conversations.get(jid) || []
  if (!history.length) return []
  const now = Date.now()
  const lastMsg = history[history.length - 1]
  const hoursSinceLast = (now - lastMsg.timestamp) / (1000 * 60 * 60)
  if (hoursSinceLast > RESET_HOURS) {
    conversations.delete(jid)
    return []
  }
  return history.map(m => ({ role: m.role, content: m.content }))
}
