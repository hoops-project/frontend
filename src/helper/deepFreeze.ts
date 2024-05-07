// NOTICE: 객체안에 중첩된 객체가 있는 객체를 얼리기 위해 사용 되는함수 정의
export const deepFreeze = <T extends object>(obj: T): T => {
  Object.freeze(obj)

  for (const prop in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, prop) &&
      typeof obj[prop] === 'object' &&
      !Object.isFrozen(obj[prop])
    ) {
      deepFreeze(obj[prop] as T)
    }
  }

  return obj
}
