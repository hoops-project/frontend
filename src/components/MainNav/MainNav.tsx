import { S } from './MainNav.style.ts';
import makeGroup from '../../assets/make-group.svg';
import myGame from '../../assets/my-game.jpg';
import lastGame from '../../assets/last-game.svg';
import friends from '../../assets/friends.svg';
import { CS } from '../../styles/commonStyle.ts';
import useModal from '../../hooks/useModal.ts';
import Modal from '../common/Modal/Modal.tsx';
import MyFriend from '../common/MyFriend/MyFriend.tsx';
import ModalTit from '../common/ModalTit/ModalTit.tsx';
import FriendList from '../FriendList/FriendList.tsx';

export default function MainNav() {
  const { isModalOpen, openModal, closeModal } = useModal();


  return (
    <>
      <S.NavContainer>
        <CS.Link to={'/add-game'}>
          <div>
            <img src={makeGroup} alt={'모임 추가'} />
            <p>모임 추가</p>
          </div>
        </CS.Link>
        <CS.Link to={'/my-game'}>
          <div>
            <img src={myGame} alt={'나의 경기'} />
            <p>나의 경기</p>
          </div>
        </CS.Link>
        <CS.Link to={'/my-last-game'}>
          <div>
            <img src={lastGame} alt={'지난 경기'} />
            <p>지난 경기</p>
          </div>
        </CS.Link>
        <CS.Link to={''}>
          <div onClick={openModal}>
            <img src={friends} alt={'친구'} />
            <p>친구</p>
          </div>
        </CS.Link>
      </S.NavContainer>
      {isModalOpen && (
        <Modal $width='auto' $height='auto' onClose={closeModal}>
          <ModalTit title='내 친구 목록' />
          <CS.Link to={'/search'}>
            <S.MoreSearch>
              <p>🏀 더 많은 친구 찾아보기</p>
            </S.MoreSearch>
          </CS.Link>
          <MyFriend>
            <FriendList isAddFriend />
          </MyFriend>
        </Modal>
      )}
    </>
  );
}
