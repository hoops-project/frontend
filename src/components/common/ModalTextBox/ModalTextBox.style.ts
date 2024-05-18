import { styled } from 'styled-components'
import { theme } from '../../../styles/theme'

export const S = {
  TextWrapper: styled.div`
    width: 100%;
    margin: 0 auto;

    & textarea {
      background-color: ${theme.colors.default_gray_bg};
      border-radius: 10px;
      border: none;
      padding: 1rem;
      width: 95%;
      height: 10rem;
      ::placeholder {
        color: #d7d7d7;
      }
    }
  `,
}
