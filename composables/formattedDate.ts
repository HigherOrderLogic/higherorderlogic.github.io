export function useFormattedDate(d: string) {
  return new Date(d).toUTCString().split(' ').slice(0, 4).join(' ')
}
