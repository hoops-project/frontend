import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
  container: styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.5rem 0 2.5rem 0;
    border-bottom: 0.1rem solid ${theme.colors.gray_400};
  `,
  Info: styled.div`
    display: flex;

    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 3rem 0 3rem;
      font-weight: bold;
    }
  `,
  Match: styled.div`
    & > p {
      font-size: 1.6rem;
      letter-spacing: 0.2rem;
    }

    & > div {
      display: flex;
      margin-top: 1rem;

      & > p {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.gray_500};
        margin: 0 0.8rem 0 0;
      }
    }
  `,
}
