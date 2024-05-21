import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
  InputWrapper: styled.div`
    padding: 1rem 0 1rem 0;
  `,

  DuplicateWrapper: styled.div<{ $readOnly: boolean }>`
    display: flex;

    & > button {
      margin-left: 1rem;
    }

    & > input {
      color: ${(props) =>
        props.$readOnly ? theme.colors.gray_500 : theme.colors.black};
    }
  `,
}
