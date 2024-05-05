import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    padding: 5rem 2rem 3rem 2rem;
    background-color: ${(props) => props.theme.colors.white};
  `,
  UserInfo: styled.div`
    display: flex;
    margin-bottom: 4rem;

    & > p {
      font-size: 2rem;
      font-weight: bold;
      margin-right: 1rem;
    }

    & > div {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.gray_500};
      & > span:first-child {
        font-weight: bold;
      }
    }
  `,
  NoticeTitle: styled.div`
    display: flex;
    align-items: center;

    & > img {
      margin-right: 0.5rem;
    }

    & > p {
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray_700};
    }
  `,
  NoticeBody: styled.div`
    max-height: 100vh;
    overflow-y: scroll;
    margin-top: 2rem;
    background-color: ${(props) => props.theme.colors.white_gray};
    height: 85%;
    padding: 2rem;
  `,
  NoticeItem: styled.div`
    background-color: ${(props) => props.theme.colors.white};
    min-height: 6rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    font-size: 1.4rem;

    & > img {
      margin-right: 1rem;
    }
  `,
}
