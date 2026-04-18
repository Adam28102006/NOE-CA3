
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  return date.toLocaleDateString('en-IE', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatTime(dateString: string): string {
  const date = new Date(dateString)

  return date.toLocaleTimeString('en-IE', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function filterBySearch<T>(
  items: T[],
  search: string,
  getField: (item: T) => string
): T[] {
  if (!search.trim()) return items

  return items.filter((item) =>
    getField(item).toLowerCase().includes(search.toLowerCase())
  )

}
