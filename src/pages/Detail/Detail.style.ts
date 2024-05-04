import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem 0 1rem 0;
  `,
  TopBackDiv: styled.div`
    position: relative;
    width: 100%;
    height: 31.5rem;
    background-color: ${(props) => props.theme.colors.white};
  `,
  TopTitleDiv: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 57rem;
    height: 18rem;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0.5rem 0.8rem 0.6rem -0.6rem gray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem 0 2rem;
    border-radius: 0.8rem;

    & > h2 {
      font-size: 4rem;
      font-weight: bold;
    }
  `,
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
  InfoWrapper: styled.div`
    position: relative;
    display: flex;
    margin: 1rem 0 1rem 0;
  `,

  StickyDiv: styled.div`
    position: sticky;
    right: 0;
    top: 7rem;
    width: 100%;
    height: 23rem;
    background-color: ${(props) => props.theme.colors.white};
    margin-left: 1rem;
    padding: 2rem;
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
  PlaceInfo: styled.div`
    & > p:nth-child(1) {
      font-weight: bold;
      margin-bottom: 3rem;
    }
    & > p:nth-child(2) {
      font-size: 2.2rem;
      margin-bottom: 1.8rem;
    }
    & > p:nth-child(3) {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.gray_700};
    }
  `,
  JoinWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    border-top: 1px solid ${(props) => props.theme.colors.gray_300};
    padding-top: 2rem;
    & > div > p:nth-child(1) {
      margin-bottom: 1rem;
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.gray_700};
    }

    & > div > p:nth-child(2) {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.red};
      font-weight: bold;
    }
  `,
}
