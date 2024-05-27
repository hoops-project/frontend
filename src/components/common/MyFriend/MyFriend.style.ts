import styled from 'styled-components'
import { theme } from '../../../styles/theme.ts'

export const S = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    height: ${theme.height.full};
    max-width: ${theme.width.default};
  `,
  TopTit: styled.div`
    display: flex;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2rem;
    width: 100%;
    justify-content: space-between;

    > a {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${theme.colors.purple};
    }
  `,
  FlexBox: styled.div`
    display: flex;
    gap: 20px;

    > p:first-child {
      margin-left: 2rem;
    }

    > p:nth-child(2) {
      margin-left: 9rem;
    }

    > p:last-child {
      margin-left: 22rem;
    }
  `,

  UnderLine: styled.hr`
    background-color: ${theme.colors.gray_400};
  `,
}
