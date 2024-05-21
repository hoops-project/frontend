export const mergeObjects = <T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U => {
  return { ...obj1, ...obj2 }
}
