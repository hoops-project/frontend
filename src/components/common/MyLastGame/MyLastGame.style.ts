import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const S = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    height: ${theme.height.full};
    max-width: ${theme.width.default};
    padding: 6rem 0;
    margin: 50px auto;
    min-height: 100vh;
  `,
  Toptit: styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    margin-left: 2rem;
    margin-bottom: 5rem;
    font-weight: 700;
    font-size: 3rem;
    color: ${theme.colors.gray_300};
    width: 100%;
  `,
  LastGameContainer: styled.div`
    align-items: center;
  `,
  Date: styled.p`
    font-weight: 700;
    font-size: 2rem;
    align-items: center;
    margin-bottom: 2rem;
    margin-top: 3rem;
  `,
  Time: styled.p`
    width: 5rem;
    padding: 2rem;
    font-size: 2rem;
    font-weight: 700;
    align-items: center;
  `,
  Match: styled.span`
    font-size: 1.5rem;
    margin-top: 2rem;
    padding-right: 1rem;
  `,
  LastGameList: styled.div`
    display: flex;
    border-bottom: 1px solid ${theme.colors.gray_300};
    padding-bottom: 3rem;
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.gray_300};
    }
    button {
      margin-left: auto;
    }
  `,
  LastGameItem: styled.div`
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    margin-left: 2rem;
  `,
  ReviewContainer: styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
  `,
}
