import { S } from "./MyLastGame.style";
import BasicButton from "../BasicButton/BasicButton";
import { theme } from "../../../styles/theme";
import { MyLastGameList } from "../../../mock/data";

export default function MyLastGame() {
  return (
    <S.Wrapper>
      <S.Toptit>
        지난 경기를 확인하고 팀원을 평가해 보세요!
      </S.Toptit>
      <S.LastGameContainer>
        {MyLastGameList.map(user => (
          <div key={user.userId}>
            <S.Date>4월 25일 목요일</S.Date>
            <S.LastGameList>
              <S.Time>{user.startDateTime}</S.Time>
              <S.LastGameItem>
                <p>{user.title}</p>
                <S.Match>📍 {user.matchPoint.gender} 🪄 트레이닝 매치</S.Match>
              </S.LastGameItem>
              <BasicButton 
                type="button"
                $bgColor={user.isRating ? theme.colors.blue :  theme.colors.gray_300}
                $borderColor={theme.colors.white}
                $width="10rem"
                $hoverBgColor={user.isRating ? theme.colors.gray_300 : theme.colors.gray_300}
                $fontcolor={theme.colors.white}
              >
                {user.isRating ? '팀원 평가' : '평가 불가능'}
              </BasicButton>
            </S.LastGameList>
          </div>
        ))}
      </S.LastGameContainer>
    </S.Wrapper>
  );
}
