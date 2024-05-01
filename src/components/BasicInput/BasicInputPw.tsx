import { S } from './BasicInput.style.ts'

export default function BasicInput() {
  return (
    <S.BasicInputContainer>
      <div>
        <label htmlFor='id'>아이디</label>
        <S.BasicFormBox>
          <input type='text' id='id' placeholder='가입한 아이디를 입력하세요' />
          <button className='submit'>발송</button>
        </S.BasicFormBox>
      </div>
    </S.BasicInputContainer>
  )
}
