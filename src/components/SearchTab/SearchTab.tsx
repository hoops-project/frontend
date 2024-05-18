import { S } from './SearchTab.style'
import SearchIcon from '../../assets/search-icon.svg'
import { userInfoData } from '../../mock/data'
import { theme } from '../../styles/theme'
import BasicButton from '../common/BasicButton/BasicButton'

export default function SearchTab() {
  return (
    <S.Wrapper>
      <S.SearchInputContainer>
        <S.Search placeholder='더 많은 친구를 검색해보세요!' />
        <S.SearchIcon src={SearchIcon} alt='Search icon' />
      </S.SearchInputContainer>
      <S.TopTit>
        <p>이름</p>
        <p>평점</p>
        <p>스타일</p>
      </S.TopTit>
      <S.UnderLine />
      <S.ListBox>
        {userInfoData.map((user) => (
          <S.ListItem key={user.userId}>
            <p>{user.nickName}</p>
            <p>{user.rating}</p>
            <p>{user.gender}</p>
            <p>{user.playStyle}</p>
            <p>{user.ability}</p>
            <BasicButton
              type='button'
              $bgColor={
                user.isRequestFriend ? theme.colors.blue : theme.colors.red
              }
              $borderColor={theme.colors.white}
              $width='10rem'
              $hoverBgColor={
                user.isRequestFriend
                  ? theme.colors.gray_300
                  : theme.colors.gray_300
              }
              $fontcolor={theme.colors.white}
            >
              {user.isRequestFriend ? '친구 신청' : '친구 삭제'}
            </BasicButton>
          </S.ListItem>
        ))}
      </S.ListBox>
    </S.Wrapper>
  )
}
