import { REGEX } from './regex.ts'

export const VALID_RULES = {
  EMAIL: {
    required: '이메일을 입력해주세요.',
    pattern: {
      value: REGEX.EMAIL,
      message: '유효한 이메일 주소를 입력해주세요.',
    },
  },
  PASSWORD: {
    required: '비밀번호를 입력해주세요.',
    validate: {
      minLength: (value: string) =>
        value.length >= 8 || '비밀번호는 최소 8자리 이상이어야 합니다.',
      maxLength: (value: string) =>
        value.length <= 13 || '비밀번호는 최대 13자리를 넘을 수 없습니다.',
      containsUppercase: (value: string) =>
        REGEX.UPPERCASE.test(value) || '비밀번호에 대문자가 포함되어야 합니다.',
      containsLowercase: (value: string) =>
        REGEX.LOWERCASE.test(value) || '비밀번호에 소문자가 포함되어야 합니다.',
      containsNumber: (value: string) =>
        REGEX.INCLUDE_NUMBER.test(value) ||
        '비밀번호에 숫자가 포함되어야 합니다.',
      containsSpecialChar: (value: string) =>
        REGEX.SPECIAL_SYMBOL.test(value) ||
        '비밀번호에 특수기호(@$!%*?&)가 포함되어야 합니다.',
    },
  },
  PASSWORD_CONFIRM: (password: string) => {
    return {
      required: '비밀번호를 한번더 입력해주세요.',
      validate: {
        passwordConfirm: (value: string) =>
          value === password || '비밀번호 두개가 일치하지 않습니다.',
      },
    }
  },
  ID: {
    required: '아이디를 입력해 주세요',
  },
  BIRTHDAY: {
    required: '생년월일을 입력해 주세요',
    validate: {
      isBirthday: (value: string) =>
        REGEX.BIRTH_DAY.test(value) || '올바른 생일 형식이 아닙니다.',
    },
  },
  NAME: {
    required: '이름을 입력해 주세요',
  },
  NICKNAME: {
    required: '닉네임을 입력해 주세요',
  },
}
