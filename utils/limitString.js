export default function limitString(value, limit = 10) {
  if (value.length > limit) {
    return `${value.substring(0, limit)}...`
  }

  return value
}