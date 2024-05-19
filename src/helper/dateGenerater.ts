export const generateNextTwoWeeksDates = () => {
  const datesArray = []
  const currentDate = new Date()

  for (let i = 0; i < 14; i++) {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + i
    )

    // 날짜를 YYYY-MM-DD 형식으로 변환
    const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`

    // 객체 형태로 날짜 정보를 배열에 추가
    datesArray.push({ NAME: formattedDate, VALUE: formattedDate })
  }

  return datesArray
}

/*
 * 함수 사용 예
 * console.log(generateNextTwoWeeksDates())
 * */
