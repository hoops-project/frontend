import { S } from './BasicInput.style.ts'

export default function BasicInput() {
  return (
    <S.BasicInputContainer>
      <div>
        <label htmlFor='email'>이메일</label>
        <S.BasicFormBox>
          <input
            type='text'
            id='email'
            placeholder='가입한 이메일을 입력하세요'
          />
          <button className='submit'>제출</button>
        </S.BasicFormBox>
      </div>
    </S.BasicInputContainer>
  )
}
