import { useState } from 'react'
import { S } from './Review.style.ts'

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
}

const Review: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <S.StarContainer>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <S.Star
            key={index}
            type="button"
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </S.Star>
        );
      })}
    </S.StarContainer>
  );
}

export default Review