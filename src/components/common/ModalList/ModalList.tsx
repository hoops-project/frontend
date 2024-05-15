import { S } from './ModalList.style'
import { userInfoData } from "../../../mock/data";
import { theme } from "../../../styles/theme";
import BasicButton from "../../common/BasicButton/BasicButton";

export default function ModalList() {
  return (
    <S.Wrapper>
      <S.TopTit>
        <S.FlexBox>
        <p>이름</p>
        <p>평점</p>
        <p>스타일</p>
        </S.FlexBox>
        <a href="javascript:;">더 많은 친구 찾아보기</a>
      </S.TopTit>
      <S.UnderLine />
      <S.ListBox>
      {userInfoData.map(user => (
          <S.ListItem key={user.userId}>
            <p>{user.nickName}</p>
            <p>{user.rating}</p>
            <p>{user.gender}</p>
            <p>{user.playStyle}</p>
            <p>{user.ability}</p>
            <BasicButton
              type="button"
              $bgColor={user.isRequestFriend ? theme.colors.blue : 'rgba(21,112,255,50%)'}
              $borderColor={theme.colors.white}
              $width="10rem"
              $hoverBgColor={user.isRequestFriend ? theme.colors.gray_300 : theme.colors.gray_300}
              $fontcolor={theme.colors.white}
            >
              {user.isRequestFriend ? '친구 초대' : '초대 완료'}
            </BasicButton>
          </S.ListItem>
        ))}
      </S.ListBox>
    </S.Wrapper>
  )
}
