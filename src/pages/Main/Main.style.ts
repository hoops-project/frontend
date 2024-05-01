import styled from 'styled-components'

export const S = {
  Container: styled.div`
    margin: 0 auto;
    padding-top: 6rem;
    background-color: ${(props) => props.theme.colors.white};
    height: fit-content;
    max-width: ${(props) => props.theme.width.default};
    min-height: ${(props) => props.theme.height.screen};

    & > div {
      padding: 5rem 0 5rem 0;
    }
  `,
  Option: styled.div`
    display: flex;
  `,
}
