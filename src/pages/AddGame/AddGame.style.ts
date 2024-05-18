import styled from 'styled-components'

export const S = {
  container: styled.div`
    height: 100%;
    width: 100%;

    & > div:last-of-type {
      margin: 3rem 0 3rem 0;
    }
  `,
  InputWrapper: styled.div`
    padding: 1rem 0 1em 0;

    & > label {
      display: block;
      padding: 1rem 0 1rem 0;
      color: ${(props) => props.theme.colors.gray_700};
    }
  `,
}
