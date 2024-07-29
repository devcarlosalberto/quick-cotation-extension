export function formatToBRL(value) {
  return Number(value).toFixed(2).toString().replace(".", ",")
}