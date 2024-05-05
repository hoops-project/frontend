import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
  Wrapper: styled.div`
    width: 100%;
    height: ${theme.height.full};
    max-width: ${theme.width.default};
    padding: 6rem 0;
    margin: 0 auto;
    min-height: 100vh;
    > p {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      margin: 5rem 0;
    }
  `,
  TopTit: styled.div`
  & .tit_box {
      display: flex;
      align-items: center;
      text-align: center;
      font-weight: 700;
      font-size: 2rem;
      width: 100%;

      > p {
        padding: 0 2.5rem;
      }
      > .styled {
        padding: 0 18rem;
      }`,
  SelectContainer: styled.div`
    margin-top: 5rem;
    width: 100%;
    padding: 2.5rem 0;
    }
  `,
}
