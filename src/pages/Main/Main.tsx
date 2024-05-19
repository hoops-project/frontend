import { Link } from 'react-router-dom'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import MainNav from '../../components/MainNav/MainNav.tsx'
import MainCarousel from '../../components/MainCarousel/MainCarousel.tsx'
import Calender from '../../components/Calender/Calender.tsx'
import { useSelectBox } from '../../hooks/useSelectBox.ts'
import MainSelectList from '../../components/MainSelectList/MainSelectList.tsx'
import { Suspense, useState } from 'react'
import MatchItem from '../../components/MatchItem/MatchItem.tsx'
import { CS } from '../../styles/commonStyle.ts'
import { S } from './Main.style.ts'
import { theme } from '../../styles/theme.ts'
import { useDateStore } from '../../store/calender.ts'
import { useGameList } from '../../hooks/query/useGameList.ts'

export default function Main() {
  const selected = useSelectBox()
  // NOTICE : 임시 데이터
  // 나중에 로그인 토큰으로 조건문 렌더링 해야됨~
  const [isAdmin] = useState(false)
  // NOTICE: 임시 데이터
  const match = {
    id: 1,
    time: '13:00',
    title: '강남 농구장',
  }

  const { date: globalDate } = useDateStore()

  const gameFilter = {
    localData: globalDate,
    cityName: selected.region,
    fieldStatus: selected.gamePlace,
    gender: selected.gender,
    matchFormat: selected.gameType,
  }

  const gameList = useGameList({
    gameFilter,
  })

  console.log(gameList)

  return (
    <CS.DefaultContainer>
      <S.Wrapper>
        <S.CenterWrapper>
          {isAdmin ? (
            <Link className='admin' to='/admin/report'>
              <BasicButton
                children={'신고 목록'}
                type={'button'}
                $bgColor={theme.colors.red}
                $fontcolor={theme.colors.white}
              />
            </Link>
          ) : (
            <MainNav />
          )}
        </S.CenterWrapper>
        <MainCarousel />
        <Calender />
        <MainSelectList selected={selected} />
        <Suspense fallback={<div>임시 fallback</div>}>
          {Array.from({ length: 10 }, (_, index) => (
            // NOTICE: 임시 배열 설정
            <MatchItem key={index} match={match} />
          ))}
        </Suspense>
      </S.Wrapper>
    </CS.DefaultContainer>
  )
}
