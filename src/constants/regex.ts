export const REGEX = {
  EMAIL: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
  BIRTH_DAY: /^(19|20)\d\d(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/,
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  INCLUDE_NUMBER: /\d/,
  SPECIAL_SYMBOL: /[@$!%*?&]/,
}
