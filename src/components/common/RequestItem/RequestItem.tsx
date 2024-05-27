import BasicButton from '../BasicButton/BasicButton.tsx'
import { theme } from '../../../styles/theme.ts'
import { S } from './RequestItem.style.ts'
import useModal from '../../../hooks/useModal.ts'
import Modal from '../../common/Modal/Modal.tsx'
import ModalTit from '../ModalTit/ModalTit.tsx'
import MyPageUserInfo from '../MyPageUserInfo/MyPageUserInfo.tsx'
import { PiInfoLight } from 'react-icons/pi'
import { FriendRequest } from '../../../types/friendRequest.ts'
import { useFriendRequestQuery } from '../../../hooks/query/useFriendRequestQuery.ts'

export default function RequestItem({ info }: { info: FriendRequest }) {
  const { isModalOpen, openModal, closeModal } = useModal()

  const { acceptRequestMutation, denyRequestMutation } = useFriendRequestQuery()

  const handleAccept = () => {
    acceptRequestMutation(info?.friendId)
  }

  const handleDeny = () => {
    denyRequestMutation(info?.friendId)
  }

  return (
    <S.RequestItem>
      <p>{info?.nickName}</p>
      <PiInfoLight onClick={openModal} />
      <p>{info?.score}</p>
      <S.ButtonWrapper>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.blue}
          $fontcolor={theme.colors.white}
          $width={'6rem'}
          onClick={handleAccept}
        >
          수락
        </BasicButton>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.red}
          $fontcolor={theme.colors.white}
          $width={'6rem'}
          onClick={handleDeny}
        >
          거절
        </BasicButton>
      </S.ButtonWrapper>
      {isModalOpen && (
        <Modal $width='50rem' $height='30rem' onClose={closeModal}>
          <ModalTit title='유저 정보' />
          <MyPageUserInfo userInfo={info} />
          <BasicButton
            type='button'
            children={'닫기'}
            $fontcolor={theme.colors.white}
            $bgColor={theme.colors.blue}
            onClick={closeModal}
          />
        </Modal>
      )}
    </S.RequestItem>
  )
}
