import { S } from './GameChat.style.ts'
import backGround from '../../assets/Background.png'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { useParams } from 'react-router-dom'
import pin from '../../assets/pin.svg'
import invite from '../../assets/invite.png'
import ChatList from '../ChatList/ChatList.tsx'
import BasicInput from '../common/BasicInput/BasicInput.tsx'
import send from '../../assets/send.svg'
import React, { useState } from 'react'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit.tsx'
import useModal from '../../hooks/useModal.ts'
import MyFriend from '../common/MyFriend/MyFriend.tsx'

export default function GameChat() {
  const params = useParams()
  const [chat, setChat] = useState<string>('')
  const {
    isModalOpen,
    openModal,
    closeModal,
    isFriendModalOpen,
    openFriendModal,
    closeFriendModal,
  } = useModal()

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(chat)
    setChat('')
  }

  return (
    <S.Wrapper>
      <S.TopTitleContainer>
        <img src={backGround} alt={'배경'} />
        <div>
          <S.TopNavContainer>
            <div>
              <span
                role='button'
                tabIndex={0}
                onClick={openModal}
                aria-label='친구 초대'
              >
                <img src={pin} alt={'핀 아이콘'} />
                <p>지도</p>
              </span>
              <span
                role='button'
                tabIndex={0}
                aria-label='친구 초대'
                onClick={openFriendModal}
              >
                <img src={invite} alt={'초대 아이콘'} />
                <p>친구 초대</p>
              </span>
            </div>
            <BasicButton
              type={'button'}
              $bgColor={theme.colors.red}
              $fontcolor={theme.colors.white}
              $width={'10rem'}
            >
              나가기
            </BasicButton>
          </S.TopNavContainer>
        </div>
        <S.GameTitle>
          <p>경기장 이름{params.id}</p>
        </S.GameTitle>
      </S.TopTitleContainer>
      {/* NOTICE: <ChatList />는 웹소켓 연결 및 채팅 내용을 렌더링하는 컴포넌트*/}
      <ChatList />
      <S.ChatSendForm onSubmit={handleSendMessage}>
        <S.InputWrapper>
          <BasicInput
            type={'text'}
            id={'chat'}
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          />
          <BasicButton
            type={'submit'}
            $bgColor={theme.colors.blue}
            $fontcolor={theme.colors.white}
          >
            <img src={send} alt={'메시지 보내기 아이콘'} />
          </BasicButton>
        </S.InputWrapper>
      </S.ChatSendForm>
      {isModalOpen && (
        <Modal $width='102.4rem' $height='50rem' onClose={closeModal}>
          <ModalTit title='내 친구들' />
          <MyFriend />
          <BasicButton
            type='button'
            children={'확인'}
            $fontcolor={theme.colors.white}
            $bgColor={theme.colors.blue}
          />
        </Modal>
      )}
      {isFriendModalOpen && (
        <Modal $width='102.4rem' $height='50rem' onClose={closeFriendModal}>
          <ModalTit title='친구 초대' />
          <MyFriend />
        </Modal>
      )}
    </S.Wrapper>
  )
}
