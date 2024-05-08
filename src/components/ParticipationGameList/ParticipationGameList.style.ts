import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    background-color: ${(props) => props.theme.colors.white};
    height: 100vh;

    & > p {
      width: 100%;
      text-align: center;
      padding-top: 2rem;
      font-weight: bold;
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.gray_500};
    }
  `,
  LockContainer: styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > p {
        margin-top: 3rem;
        color: ${(props) => props.theme.colors.gray_500};
      }
    }
  `,
}
