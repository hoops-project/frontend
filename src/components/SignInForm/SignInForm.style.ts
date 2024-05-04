import styled from 'styled-components'

export const S = {
  ErrorWrapper: styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: red;
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
  InputLabel: styled.label`
    font-size: 1.4rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.colors.gray_500};
  `,
  RememberId: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;

    & > p {
      margin-left: 0.6rem;
      margin-top: 0.2rem;
      color: ${(props) => props.theme.colors.gray_500};
      font-size: 1.4rem;
    }
  `,
}
