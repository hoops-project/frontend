import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    margin: 0 auto;
    width: 80%;
    padding-top: 7.5rem;

    & > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > div:nth-child(1),
      & > div:nth-child(2),
      & > div:nth-child(4) {
        width: 100%;
        padding: 2rem 0 2rem 0;
      }
      & > div:last-of-type {
        padding-top: 2rem;
      }
    }
  `,

  FindAccount: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.7rem 0 6rem 0;

    & > a > span {
      color: ${(props) => props.theme.colors.gray_500};
    }

    & > a > p {
      margin-left: 2.5rem;
      color: ${(props) => props.theme.colors.gray_500};
    }
  `,
  Hr: styled.hr`
    margin-bottom: 5rem;
    height: 0.1rem;
    border: 0;
    background-color: ${(props) => props.theme.colors.gray_400};
  `,
  OAuthTitle: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  KakaoIcon: styled.img`
    margin-right: 1rem;
  `,
}
