import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
  Container: styled.div`
    background-color: ${theme.colors.white};
  `,
  Form: styled.form`
    padding: 2.5rem;
  `,
  InputWrapper: styled.div<{ $readonly: boolean }>`
    max-width: 100%;
    margin: 1.8rem 0 1.8rem 0;
    & > input {
      color: ${(props) =>
        props.$readonly ? theme.colors.gray_400 : theme.colors.black};
    }
  `,
}
