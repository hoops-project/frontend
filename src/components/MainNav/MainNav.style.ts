import styled from 'styled-components'

export const S = {
  NavContainer: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a > div {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > p {
        font-size: 1.2rem;
        margin-top: 1rem;
      }

      & > img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  `,
  MoreSearch: styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0;
  `
}
