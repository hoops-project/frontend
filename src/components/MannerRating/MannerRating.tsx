import { useState } from 'react';
import useGetMannerRatingQuery from '../../hooks/query/useGetMannerRatingQuery.ts';
import Review from '../common/Review/Review.tsx';
import { S } from './MannerRating.style.ts';
import usePostRatingQuery from '../../hooks/query/usePostRating.tsx';
import { theme } from '../../styles/theme.ts';
import BasicButton from '../common/BasicButton/BasicButton.tsx';

interface Participant {
  id: number;
  playerId: number;
  player: string;
  rating: number;
}

interface ReviewListProps {
  gameId: number;
  onSubmit: (ratings: { [key: number]: number }) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ gameId, onSubmit }) => {
  const { rateManner } = useGetMannerRatingQuery(gameId);
  const [points, setPoints] = useState<{ [key: number]: number }>({});
  const { postRate } = usePostRatingQuery();

  const handleSetPoint = (receiverId: number, point: number) => {
    setPoints((prevPoints) => ({
      ...prevPoints,
      [receiverId]: point,
    }));
  };

  const handleSubmit = () => {
    const filteredPoints = Object.keys(points)
      .filter((receiverId) => points[Number(receiverId)] !== null)
      .reduce((acc, receiverId) => {
        acc[Number(receiverId)] = points[Number(receiverId)];
        return acc;
      }, {} as { [key: number]: number });

    onSubmit(filteredPoints);
  };
  return (
    <div>
      {rateManner && rateManner.map((participant: Participant) => (
        <S.RatingWrapper key={participant.id}>
          <S.RatingItems>
            <p>{participant.player}</p>
            <Review
              rating={points[participant.playerId] || participant.rating}
              setRating={(point) => handleSetPoint(participant.playerId, point)}
            />
          </S.RatingItems>
      <BasicButton
        type="button"
        $width="6rem"
        $bgColor={theme.colors.blue}
        $fontcolor={theme.colors.white}
        onClick={handleSubmit}
      >
        제출
      </BasicButton>          
        </S.RatingWrapper>
      ))}
    </div>
  );
};

export default ReviewList;
