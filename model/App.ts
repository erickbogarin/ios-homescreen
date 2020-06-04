export interface App {
  label: string
  image: string
}

export interface AppRow {
  [key: string]: App[]
}
