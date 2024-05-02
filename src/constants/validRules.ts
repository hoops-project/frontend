export const VALID_RULES = {
  EMAIL: {
    required: '이메일을 입력해주세요.',
    pattern: {
      value: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
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
        /[A-Z]/.test(value) || '비밀번호에 대문자가 포함되어야 합니다.',
      containsLowercase: (value: string) =>
        /[a-z]/.test(value) || '비밀번호에 소문자가 포함되어야 합니다.',
      containsNumber: (value: string) =>
        /\d/.test(value) || '비밀번호에 숫자가 포함되어야 합니다.',
      containsSpecialChar: (value: string) =>
        /[@$!%*?&]/.test(value) ||
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
  BIRTHDAY: {
    required: '생년월일을 입력해 주세요',
    validate: {
      isBirthday: (value: string) =>
        /^(19|20)\d\d(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/.test(value) ||
        '올바른 생일 형식이 아닙니다.',
    },
  },
}
