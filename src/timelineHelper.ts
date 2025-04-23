export function percentLeft(
  daysSinceOrigin: number,
  offset: number,
  lineLength: number
) {
  return daysSinceOrigin - offset < 0
    ? 0
    : ((daysSinceOrigin - offset) / lineLength) * 100;
}
