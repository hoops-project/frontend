import styled from 'styled-components'

export const S = {
  container: styled.div`
    height: 100%;
    width: 100%;

    & > div:last-of-type {
      margin: 3rem 0 3rem 0;
    }
  `,
  InputWrapper: styled.div`
    padding: 1rem 0 1em 0;

    & > label {
      display: block;
      padding: 1rem 0 1rem 0;
      color: ${(props) => props.theme.colors.gray_700};
    }
  `,
  Form: styled.form`
    & > label {
      display: block;
      padding: 1rem 0 1rem 0;
      color: ${(props) => props.theme.colors.gray_700};
    }

    & > div {
      display: flex;

      & > button {
        margin-left: 1rem;
      }
    }
  `,
  KakaoMap: styled.div`
    display: flex;
    padding-top: 3rem;
  `,
  Location: styled.div`
    display: flex;
    padding: 1rem 0 1rem 0;

    & > label {
      margin-right: 1.5rem;
    }
    & > div {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.gray_500};

      & > span:first-child {
        margin-right: 1.5rem;
      }

      & > span:last-of-type {
        font-weight: 600;
      }
      & > img {
        width: 2rem;
        height: 2rem;
        margin-left: 1rem;
        transform: translateY(-0.3rem);
      }
    }
  `,
}
