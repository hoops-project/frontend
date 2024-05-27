import { S } from './MyLastGame.style';
import BasicButton from '../BasicButton/BasicButton';
import { theme } from '../../../styles/theme';
import Modal from '../Modal/Modal';
import ModalTit from '../ModalTit/ModalTit';
import ReviewList from '../../MannerRating/MannerRating';
import useModal from '../../../hooks/useModal';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import useGetMyLastGameListQuery from '../../../hooks/query/useGetMyLastGameListQuery';
import { GameListData } from '../../../types/game';
import Badge from '../Badge/Badge';
import dayjs from 'dayjs';
import { OPTIONS } from '../../../constants/selectOption';
import { useState } from 'react';
import useToast from '../../../hooks/useToast';
import usePostRatingQuery from '../../../hooks/query/usePostRating';

export default function MyLastGame() {
  const { toastSuccess, toastError } = useToast();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentGameId, setCurrentGameId] = useState<number | null>(null);
  const { postRate }= usePostRatingQuery()
  const {
    myLastGameListData,
    myLastGameListFetchNextPage,
    myLastGameListHasNextPage,
    myLastGameListIsLoading,
    myLastGameListIsFetching,
  } = useGetMyLastGameListQuery();

  const { loader } = useInfiniteScroll({
    fetchNextPage: myLastGameListFetchNextPage,
    hasNextPage: myLastGameListHasNextPage,
  });

  const handleOpenModal = (gameId: number) => {
    setCurrentGameId(gameId);
    openModal();
  };

  const handleSubmit = (points: { [key: number]: number }) => {
    if (currentGameId !== null) {
      for (const receiverId in points) {
        postRate({ gameId: currentGameId, receiverId: Number(receiverId), point: points[receiverId] });
      }
      closeModal();
      toastSuccess('모든 평가가 성공적으로 제출되었습니다!');
    }
  };
  if (myLastGameListIsLoading) {
    return <div>Loading...🏀</div>;
  }

  return (
    <S.Wrapper>
      <S.Toptit>지난 경기를 확인하고 팀원을 평가해 보세요!</S.Toptit>
      <S.LastGameContainer>
        {myLastGameListData?.pages.map((page, pageIndex) => (
          <div key={pageIndex}>
            {page.content.map((game: GameListData, gameIndex: number) => {
              const isLastElement =
                myLastGameListData.pages.length - 1 === pageIndex &&
                page.content.length - 1 === gameIndex;
              const formattedDate = dayjs(game.startDateTime).format('YYYY년 MM월 DD일');
              const formattedTime = dayjs(game.startDateTime).format('HH:mm');
              const genderOption =
                OPTIONS.GENDER.find((option) => option.VALUE === game.gender)?.NAME ||
                game.gender;
              const matchFormatOption =
                OPTIONS.GAME_TYPE.find((option) => option.VALUE === game.matchFormat)?.NAME ||
                game.matchFormat;
              return (
                <div key={game.gameId} ref={loader}>
                  <S.Date>{formattedDate}</S.Date>
                  <S.LastGameList>
                    <S.Time>{formattedTime}</S.Time>
                    <S.LastGameItem>
                      <p>{game.title}</p>
                      <S.Match>
                        📍 {genderOption}&nbsp;
                        🪄 {matchFormatOption}&nbsp;&nbsp;
                        <Badge
                          $bgColor={game.inviteYn ? theme.colors.green : theme.colors.gray_300}
                          $fontcolor={theme.colors.white}
                        >
                          {game.inviteYn ? '평가 가능' : '기한 경과'}
                        </Badge>
                      </S.Match>
                    </S.LastGameItem>
                    <BasicButton
                      type="button"
                      $bgColor={game.inviteYn ? theme.colors.blue : theme.colors.gray_300}
                      $borderColor={theme.colors.white}
                      $width="10rem"
                      $hoverBgColor={game.inviteYn ? theme.colors.gray_300 : theme.colors.gray_300}
                      $fontcolor={theme.colors.white}
                      onClick={() => handleOpenModal(game.gameId)}
                      disabled={!game.inviteYn}
                    >
                      {game.inviteYn ? '팀원 평가' : '평가 불가능'}
                    </BasicButton>
                  </S.LastGameList>
                  {isLastElement}
                </div>
              );
            })}
          </div>
        ))}
        {myLastGameListIsFetching && <div>Loading more...</div>}
      </S.LastGameContainer>
      {isModalOpen && currentGameId !== null && (
        <Modal $width="auto" $height='auto' onClose={closeModal}>
          <ModalTit title="유저 평가" />
          <ReviewList gameId={currentGameId} onSubmit={handleSubmit} />
        </Modal>
      )}
    </S.Wrapper>
  );
}
