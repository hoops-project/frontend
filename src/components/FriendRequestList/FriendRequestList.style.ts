import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    background-color: ${(props) => props.theme.colors.white};
    height: calc(50vh - 4rem);
    margin-bottom: 1rem;
    padding: 4rem 2rem 2rem 2rem;
    overflow: scroll;
    & > p {
      margin-bottom: 3rem;
      font-weight: bold;
      font-size: 1.8rem;
    }
  `,
}
