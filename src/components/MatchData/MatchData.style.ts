import { styled } from 'styled-components'

export const S = {
  MatchData: styled.div`
    width: 60rem;
    min-height: 26rem;
    background-color: ${(props) => props.theme.colors.white};
    margin-top: 1rem;
    padding: 3rem;

    & > p {
      font-weight: bold;
      font-size: 1.8rem;
      margin-bottom: 3rem;
    }
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      color: ${(props) => props.theme.colors.gray_500};

      & > img {
        margin-bottom: 2rem;
      }
    }
  `,
  MatchContent: styled.span`
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.gray_700};
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 7rem;

    & > p {
      font-weight: bold;
    }
  `,
}
