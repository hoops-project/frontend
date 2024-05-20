import { S } from './GameUserList.style.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { MyGameUserList } from '../../types/game.ts'
import useModal from '../../hooks/useModal.ts'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit.tsx'
import ModalSubText from '../common/ModalSubText/ModalSubText.tsx'
import ModalTextBox from '../common/ModalTextBox/ModalTextBox.tsx'
import { PiSirenThin } from 'react-icons/pi'

export default function GameUserList({ userInfo }: MyGameUserList) {
  const userId = 1
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <S.Wrapper>
      <p>유저 목록</p>
      <div>
        {userInfo.map(
          (info) =>
            userId !== info.userId && (
              <S.UserInfo key={info.userId}>
                <p>{info.name}</p>
                {userId === info.gameId ? <p>팀장</p> : <p>팀원</p>}
                <p>{info.rate}</p>
                <BasicButton
                  type={'button'}
                  $bgColor={theme.colors.blue}
                  $fontcolor={theme.colors.white}
                  $width={'7rem'}
                >
                  친구 추가
                </BasicButton>
                <PiSirenThin onClick={openModal} />
              </S.UserInfo>
            )
        )}
      </div>
      {isModalOpen && (
        <Modal $width='50rem' $height='30rem' onClose={closeModal}>
          <ModalTit title='신고' />
          <ModalSubText content='유저의 신고 사유를 작성해 주세요.' alignLeft />
          <ModalTextBox />
          <BasicButton
            type='button'
            children={'제출'}
            $width='100%'
            onClick={closeModal}
            $fontcolor={theme.colors.white}
            $bgColor={theme.colors.blue}
          />
        </Modal>
      )}
    </S.Wrapper>
  )
}
