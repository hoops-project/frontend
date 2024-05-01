import Slider from '../common/Slider/Slider.tsx'
import { S } from './Calender.style.ts'
import { useState } from 'react'

export default function Calender() {
  const [selected, setSelected] = useState<number>(0)

  const handleClick = (
    index: number,
    year: number,
    month: number,
    date: number
  ) => {
    setSelected(index)

    // NOTICE: 나중에 데이터 서버 전송을 위해 미리 받아옴
    console.log(year, month, date)
  }

  const currentDate = new Date()
  const year: number = currentDate.getFullYear()
  const month: number = currentDate.getMonth() + 1
  const date: number = currentDate.getDate()

  const getDayName = (year: number, month: number, date: number) => {
    const day: Date = new Date(year, month - 1, date)
    const dayNames = ['일', '월', '화', '수', '목', '금', '토']

    return dayNames[day.getDay()]
  }

  const getColorByDayOfWeek = (dayOfWeek: string) => {
    switch (dayOfWeek) {
      case '토':
        return 'blue'
      case '일':
        return 'red'
      default:
        return 'black'
    }
  }

  return (
    <S.Container>
      <Slider
        arrowVisible={true}
        indicators={false}
        cycle={true}
        sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <S.Item>
          {Array.from({ length: 7 }, (_, index) => (
            <S.Date
              key={index}
              role={'button'}
              onClick={() => handleClick(index, year, month, date + index)}
              $selected={selected === index}
              $dateColor={getColorByDayOfWeek(
                getDayName(year, month, date + index)
              )}
            >
              {/** TODO: 클릭할때 마다 해당 요일에 해당하는 경기 불러오기 */}
              <p>{date + index}</p>
              <p>{getDayName(year, month, date + index)}</p>
            </S.Date>
          ))}
        </S.Item>
        <S.Item>
          {Array.from({ length: 7 }, (_, index) => (
            <S.Date
              key={index}
              role={'button'}
              onClick={() =>
                handleClick(index + 7, year, month, date + 7 + index)
              }
              $selected={selected === index + 7}
              $dateColor={getColorByDayOfWeek(
                getDayName(year, month, date + index)
              )}
            >
              {/** TODO: 클릭할때 마다 해당 요일에 해당하는 경기 불러오기 */}
              <p>{date + 7 + index}</p>
              <p>{getDayName(year, month, date + 7 + index)}</p>
            </S.Date>
          ))}
        </S.Item>
      </Slider>
    </S.Container>
  )
}
