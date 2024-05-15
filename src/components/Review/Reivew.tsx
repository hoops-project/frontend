import { useState } from 'react';
import { S } from './Review.style.ts';
import coloredStar  from '../../assets/colored_star.svg';
import emptyStar from '../../assets/empty_star.svg';
import { userInfoData } from '../../mock/data.ts';

export default function Review() {
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (selectedStars: number) => {
    setRating(selectedStars);
  };

  const nickname = userInfoData[0].nickName;

  return (
    <S.Wrapper>
      <p>{nickname}</p>
      <S.ImgContainer>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={rating > index ? coloredStar : emptyStar}
            alt={rating > index ? 'Filled Star' : 'Empty Star'}
            onClick={() => handleRatingChange(index + 1)}
          />
        ))}
      </S.ImgContainer>
    </S.Wrapper>
  );
}
