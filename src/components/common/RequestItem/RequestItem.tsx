import BasicButton from '../BasicButton/BasicButton.tsx'
import { theme } from '../../../styles/theme.ts'
import { S } from './RequestItem.style.ts'
import useModal from '../../../hooks/useModal.ts'
import Modal from '../../common/Modal/Modal.tsx'
import ModalTit from '../ModalTit/ModalTit.tsx'
import MyPageUserInfo from '../MyPageUserInfo/MyPageUserInfo.tsx'
import { PiInfoLight } from 'react-icons/pi'

export default function RequestItem() {
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <S.RequestItem>
      <p>{`오신웅`}</p>
      <PiInfoLight onClick={openModal} />
      <p>{`4.9`}</p>
      <S.ButtonWrapper>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.blue}
          $fontcolor={theme.colors.white}
          $width={'6rem'}
        >
          수락
        </BasicButton>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.red}
          $fontcolor={theme.colors.white}
          $width={'6rem'}
        >
          거절
        </BasicButton>
      </S.ButtonWrapper>
      {isModalOpen && (
        <Modal $width='50rem' $height='30rem' onClose={closeModal}>
          <ModalTit title='유저 정보' />
          <MyPageUserInfo />
          <BasicButton
            type='button'
            children={'닫기'}
            $bgColor={theme.colors.blue}
          />
        </Modal>
      )}
    </S.RequestItem>
  )
}
