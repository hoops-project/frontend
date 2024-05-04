import styled from 'styled-components'

export const S = {
  MatchPoint: styled.div`
    max-width: 60rem;
    height: 23rem;
    background-color: ${(props) => props.theme.colors.white};
    margin-bottom: 1rem;
    padding: 3rem;
    display: grid;
    grid-template-rows: 2rem 3fr 1fr;

    & > p {
      font-weight: bold;
      font-size: 1.8rem;
    }
  `,
  PointWrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  `,
  Point: styled.div`
    width: 100%;
    display: grid;
    grid-gap: 4rem;

    & > div {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.gray_700};
      & > img {
        margin-right: 1rem;
      }
    }
  `,
  Girl: styled.div`
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-top: 0.1rem solid ${(props) => props.theme.colors.gray_300};
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.gray_700};

    & > p {
      margin-left: 1.5rem;
      padding-top: 0.4rem;
    }
  `,
}
