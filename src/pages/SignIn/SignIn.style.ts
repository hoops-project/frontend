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
      & > div {
        width: 100%;
        margin: 2rem 0 2rem 0;
      }
      & > div:last-of-type {
        padding-top: 3rem;
      }
    }
  `,
  InputTitle: styled.p`
    font-size: 1.4rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.colors.gray_500};
  `,
  ValidWrapper: styled.div`
    display: flex;
    & > span {
      font-size: 1.2rem;
      color: red;
      margin-left: 0.6rem;
    }

    & > img {
      transform: translateY(-0.5rem);
      padding-left: 0.6rem;
      width: 1.7rem;
      height: 1.7rem;
    }
  `,
  ErrorWrapper: styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: red;
  `,
}
