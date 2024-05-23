import styled from 'styled-components'

export const S = {
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

  PlaceInfo: styled.div`
    & > p:nth-child(1) {
      font-weight: bold;
      margin-bottom: 3rem;
    }
    & > p:nth-child(2) {
      font-size: 2.2rem;
      margin-bottom: 1rem;
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
    & > div > a {
      display: block;
      margin-top: 3rem;
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.gray_500};
    }
  `,
  BasicButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
  `,
}
