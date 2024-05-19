import { S } from './GameUserList.style.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import reportIcon from '../../assets/report_icon.svg'
import { MyGameUserList } from '../../types/game.ts'
import useModal from '../../hooks/useModal.ts'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit.tsx'
import ModalSubText from '../common/ModalSubText/ModalSubText.tsx'
import ModalTextBox from '../common/ModalTextBox/ModalTextBox.tsx'

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
                <img
                  role='button'
                  tabIndex={0}
                  onClick={openModal}
                  aria-label='친구 초대'
                  src={reportIcon}
                  alt={'신고 아이콘'}
                />
              </S.UserInfo>
            )
        )}
      </div>
      {isModalOpen && (
        <Modal
          $width='50rem'
          $height='30rem'
          onClose={closeModal}
          confirmButtonText='제출'
        >
          <ModalTit title='신고' />
          <ModalSubText content='유저의 신고 사유를 작성해 주세요.' alignLeft />
          <ModalTextBox />
        </Modal>
      )}
    </S.Wrapper>
  )
}
