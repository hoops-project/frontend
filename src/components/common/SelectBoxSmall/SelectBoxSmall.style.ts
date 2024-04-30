import styled from 'styled-components'
import { theme } from '../../../styles/theme.ts'

export const S = {
  SelectBoxSmall: styled.select`
    border: 0.1rem solid ${theme.colors.gray_400};
    border-radius: 2rem;
    padding: 0.3rem 1rem 0.3rem 1rem;

    & > option {
      color: ${theme.colors.gray_400};
    }
  `,
}
