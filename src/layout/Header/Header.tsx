import { S } from './Header.style.ts'
import logo from '../../assets/hoops-logo.png'
import notice from '../../assets/ph-bell-light.svg'
import myPage from '../../assets/my-page.svg'
import SearchInput from '../../components/SearchInput/SearchInput.tsx'
import { CS } from '../../styles/commonStyle.ts'

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <h1>
          <S.Logo src={logo} alt='훕스 로고' />
        </h1>
        <S.SearchGroup>
          <SearchInput />
          <CS.Link to={'/sign-in'}>
            <img src={notice} alt='알림' />
          </CS.Link>
          <CS.Link to={'/sign-in'}>
            <img src={myPage} alt='마이 페이지' />
          </CS.Link>
        </S.SearchGroup>
      </S.Container>
    </S.Header>
  )
}
