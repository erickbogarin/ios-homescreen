function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

export default prop
