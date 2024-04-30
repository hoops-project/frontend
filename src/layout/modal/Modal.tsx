import { S } from './Modal.style.ts'

export default function modal() {
  return (
    <S.ModalContainer>
      <S.Modal>
        <h3 className='tit'>회원가입 완료</h3>
        <p className='txt'>
          입력하신 이메일로 인증 URL이 전송되었습니다. <br />
          이메일 인증을 완료해주세요.
        </p>
        <button className='submit_btn'>확인</button>
      </S.Modal>
    </S.ModalContainer>
  )
}
