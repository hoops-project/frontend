import { S } from './MyLastGame.style'
import BasicButton from '../BasicButton/BasicButton'
import { theme } from '../../../styles/theme'
import { MyLastGameList } from '../../../mock/data'
import Modal from '../Modal/Modal'
import ModalTit from '../ModalTit/ModalTit'
import Review from '../Review/Review'
import useModal from '../../../hooks/useModal'

export default function MyLastGame() {
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <S.Wrapper>
      <S.Toptit>지난 경기를 확인하고 팀원을 평가해 보세요!</S.Toptit>
      <S.LastGameContainer>
        {MyLastGameList.map((user) => (
          <div key={user.userId}>
            <S.Date>4월 25일 목요일</S.Date>
            <S.LastGameList>
              <S.Time>{user.startDateTime}</S.Time>
              <S.LastGameItem>
                <p>{user.title}</p>
                <S.Match>📍 {user.matchPoint.gender} 🪄 트레이닝 매치</S.Match>
              </S.LastGameItem>
              <BasicButton
                type='button'
                $bgColor={
                  user.isRating ? theme.colors.blue : theme.colors.gray_300
                }
                $borderColor={theme.colors.white}
                $width='10rem'
                $hoverBgColor={
                  user.isRating ? theme.colors.gray_300 : theme.colors.gray_300
                }
                $fontcolor={theme.colors.white}
                onClick={openModal}
              >
                {user.isRating ? '팀원 평가' : '평가 불가능'}
              </BasicButton>
            </S.LastGameList>
          </div>
        ))}
      </S.LastGameContainer>
      {isModalOpen && (
        <Modal $width='30rem' $height='40rem' onClose={closeModal}>
          <ModalTit title='유저 평가' />
          <S.ReviewContainer>
            {Array.from({ length: 2 }).map((_, index) => (
              <Review key={index} />
            ))}
          </S.ReviewContainer>
          <BasicButton
            type='button'
            children={'제출'}
            $width='100%'
            $bgColor={theme.colors.blue}
            $fontcolor={theme.colors.white}
          />
        </Modal>
      )}
    </S.Wrapper>
  )
}
