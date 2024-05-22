import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { S } from './JoinGame.style.ts'
import useModal from '../../hooks/useModal.ts'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit'
import { reportDetail } from '../../mock/data.ts'

interface JoinGame {
  date: string
  title: string
  restCount: number
}

export default function JoinGame({ date, title, restCount }: JoinGame) {
  const { isModalOpen, openModal, closeModal } = useModal()
  const gameAddress = reportDetail[0].address

  return (
    <S.StickyDiv>
      <S.PlaceInfo>
        <p>{date}</p>
        <p>{title}</p>
      </S.PlaceInfo>
      <S.JoinWrapper>
        <div>
          <p>마감까지</p>
          <p>{`${restCount}자리 남았어요!`}</p>
        </div>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.blue}
          $fontcolor={theme.colors.white}
          $width={'40%'}
          onClick={openModal}
        >
          참가
        </BasicButton>
      </S.JoinWrapper>
      {isModalOpen && ( // 모달 열렸을 때만 모달 표시
        <Modal $width='52rem' $height='24rem' onClose={closeModal}>
          <ModalTit title='참가 신청' />
          <p className='address'>{gameAddress}</p>
          <p className='submit'>
            참가 신청을 보낼까요?
            <br />
            주최자가 승인하면 모임에 자동 참가 됩니다.
          </p>
          <S.BasicButtonWrapper>
            <BasicButton
              children={'아니오'}
              $bgColor={theme.colors.red}
              $width='14.5rem'
              $fontcolor={theme.colors.white}
              type='button'
              onClick={closeModal}
            />
            <BasicButton
              children={'네'}
              $bgColor={theme.colors.blue}
              $width='14.5rem'
              $fontcolor={theme.colors.white}
              type='button'
              // 참가 신청 완료 된 페이지로 연결해야됨
              onClick={closeModal}
            />
          </S.BasicButtonWrapper>
        </Modal>
      )}
    </S.StickyDiv>
  )
}
