import styled from 'styled-components'
import { theme } from '../../../styles/theme.ts'

export const S = {
  TextArea: styled.textarea`
    width: 100%;
    min-height: 30rem;
    resize: none;
    border: 0.1rem solid ${theme.colors.gray_400};
    background-color: ${theme.colors.white_gray};
    padding: 1.5rem;
    outline: none;
    font-size: 1.6rem;
    border-radius: 0.8rem;
  `,
}
