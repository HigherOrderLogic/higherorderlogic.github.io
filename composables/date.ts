export function useDate(d: string) {
  return new Date(d).toUTCString().split(" ").slice(0, 4).join(" ");
}
