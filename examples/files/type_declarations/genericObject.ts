type GenericObject<T> = {
  id: string
  value: T
}

const myObject: GenericObject<number> = {
  id: '0',
  value: 42,
}
