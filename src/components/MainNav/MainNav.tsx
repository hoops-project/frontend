import { S } from './MainNav.style.ts'
import makeGroup from '../../assets/make-group.svg'
import myGame from '../../assets/my-game.jpg'
import girl from '../../assets/girl.svg'
import lastGame from '../../assets/last-game.svg'
import friends from '../../assets/friends.svg'
import { CS } from '../../styles/commonStyle.ts'

export default function MainNav() {
  return (
    <S.NavContainer>
      <CS.Link to={'/add-game'}>
        <div>
          <img src={makeGroup} alt={'모임 추가'} />
          <p>모임 추가</p>
        </div>
      </CS.Link>
      <CS.Link to={'/'}>
        <div>
          <img src={myGame} alt={'나의 경기'} />
          <p>나의 경기</p>
        </div>
      </CS.Link>
      <CS.Link to={'/'}>
        <div>
          <img src={girl} alt={'여성 경기'} />
          <p>여성 경기</p>
        </div>
      </CS.Link>
      <CS.Link to={'/'}>
        <div>
          <img src={lastGame} alt={'지난 경기'} />
          <p>지난 경기</p>
        </div>
      </CS.Link>
      <CS.Link to={'/'}>
        <div>
          <img src={friends} alt={'친구'} />
          <p>친구</p>
        </div>
      </CS.Link>
    </S.NavContainer>
  )
}
