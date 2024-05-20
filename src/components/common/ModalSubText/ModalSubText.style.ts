import styled from 'styled-components'
import { theme } from '../../../styles/theme'

interface SubTextWrapperProps {
  alignLeft?: boolean
}

export const S = {
  SubTextWrapper: styled.div<SubTextWrapperProps>`
    margin: ${(props) => (props.alignLeft ? '0 auto 0 0' : '0 auto')};
  `,
  SubText: styled.p`
    font-size: 1.4rem;
    font-weight: 700;
    color: ${theme.colors.gray_500};
  `,
}
