import { S } from './Header.style.ts'
import logo from '../../assets/hoops-logo.png'
import myPage from '../../assets/my-page.svg'
import SearchInput from '../../components/SearchInput/SearchInput.tsx'
import { CS } from '../../styles/commonStyle.ts'
import { PiSignInLight } from 'react-icons/pi'
import { useAuthStore } from '../../store/store.ts'

export default function Header() {
  const globalLoginState = useAuthStore((state) => state.isLoggedIn)

  return (
    <S.Header>
      <S.Container>
        <h1>
          <CS.Link to={'/'}>
            <S.Logo src={logo} alt='훕스 로고' />
          </CS.Link>
        </h1>
        <S.SearchGroup>
          <SearchInput />
          {globalLoginState ? (
            <CS.Link to={'/my-page'}>
              <img src={myPage} alt='마이 페이지' />
            </CS.Link>
          ) : (
            <CS.Link to={'/sign-in'}>
              <PiSignInLight />
            </CS.Link>
          )}
        </S.SearchGroup>
      </S.Container>
    </S.Header>
  )
}
