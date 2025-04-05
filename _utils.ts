const pad = (n: number, l: number) =>
  n.toString().padStart(l, "0")

export const dateISO = (date: Date) => {
  const year = pad(date.getUTCFullYear(), 4)
  const month = pad(date.getUTCMonth(), 2)
  const day = pad(date.getUTCDate(), 2)
  return `${year}-${month}-${day}`
}

export const datePretty = (d: Date) =>
  d.toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
