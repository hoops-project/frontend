import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const S = {
  SubTextWrapper: styled.div`
    margin: 0 auto;
  `,
  SubText: styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${theme.colors.gray_500};
  `,
}
