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
import { useUserInfoQuery } from '../../hooks/query/useUserInfoQuery.ts'

export default function GameUserList({ userInfo }: MyGameUserList) {
  const { isModalOpen, openModal, closeModal } = useModal()

  const { userInfo: currentUser } = useUserInfoQuery()

  return (
    <S.Wrapper>
      <p>유저 목록</p>
      <div>
        {userInfo?.map(
          (info) =>
            currentUser?.userId !== info.userId && (
              <S.UserInfo key={info.participantId}>
                <p>{info.nickName}</p>
                {currentUser?.userId === info.userId ? (
                  <p>팀장</p>
                ) : (
                  <p>팀원</p>
                )}
                <p>{info.mannerPoint ? info.mannerPoint : '0.0'}</p>
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
