
function pad0 (str: string | number) {
  return str.toString().padStart(2, '0')
}

export function formatTime (time: Date) {
  time = new Date(time)
  const dateStr = `${time.getFullYear()}年${time.getMonth() + 1}月${time.getDate()}日`
  const timeStr = `${pad0(time.getHours())}:${pad0(time.getMinutes())}:${pad0(time.getSeconds())}`
  return `${dateStr} ${timeStr}`
}
