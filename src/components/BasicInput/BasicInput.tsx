import { S } from './BasicInput.style.ts'

interface BasicInputProps {
  isEmail: boolean
}

export default function BasicInput({ isEmail }: BasicInputProps) {
  return (
    <S.BasicInputContainer>
      <div>
        <label htmlFor={isEmail ? 'email' : 'id'}>
          {isEmail ? '이메일' : '아이디'}
        </label>
        <S.BasicFormBox>
          <input
            type='text'
            id={isEmail ? 'email' : 'id'}
            placeholder={
              isEmail ? '가입한 이메일을 입력하세요' : '아이디를 입력하세요'
            }
          />
          <button className='submit'>제출</button>
        </S.BasicFormBox>
      </div>
    </S.BasicInputContainer>
  )
}
