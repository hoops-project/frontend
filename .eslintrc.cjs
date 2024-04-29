module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/type-annotation-spacing': 'warn', // 타입 주석 간격 설정
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 사용하지 않는 변수 경고, 언더스코어 시작 변수는 예외 처리
    '@typescript-eslint/no-explicit-any': 'error', // any 타입 사용 금지
    'no-console': 'warn', // 콘솔 사용 경고
    'prefer-const': 'warn', // 재할당 되지 않는 변수는 const 사용 권장

    'eqeqeq': ['error', 'always'], // 엄격한 비교 사용 (== 대신 === 사용 권장)
    //'@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }], // 함수 반환 타입 명시
    'curly': ['error', 'all'], // 모든 제어문에 중괄호 사용 강제
    'no-trailing-spaces': 'error', // 줄 끝의 불필요한 공백 금지
    'eol-last': ['error', 'always'], // 파일의 끝에 빈 줄 하나를 두어야 함
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // 연속된 빈 줄 금지
    '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: true, variables: true }], // 선언하기 전에 사용 금지 (함수는 예외)
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }], // 함수 괄호 전의 공백 스타일 강제
  }

}
