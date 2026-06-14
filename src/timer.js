const timers = new Map()
const TIMEOUT_MS = 3 * 60 * 1000 // 3 menit

export function startTimer(jid, onTimeout) {
  cancelTimer(jid)
  const timer = setTimeout(() => {
    timers.delete(jid)
    onTimeout(jid)
  }, TIMEOUT_MS)
  timers.set(jid, timer)
}

export function cancelTimer(jid) {
  const existing = timers.get(jid)
  if (existing) {
    clearTimeout(existing)
    timers.delete(jid)
  }
}

export function isPending(jid) {
  return timers.has(jid)
}
