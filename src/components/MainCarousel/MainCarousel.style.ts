import styled from 'styled-components'

export const S = {
  container: styled.div`
    width: 100%;
    margin-top: 5rem;
  `,
  Item: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
      -webkit-user-drag: none;
    }
  `,
}
