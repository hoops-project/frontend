import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.white_gray};
    border-radius: 1rem;
    padding: 2rem 0 2rem 0;

    & > div:first-of-type {
      margin-top: 2rem;
      height: calc(100vh - 82rem);
      min-height: 10rem;
      overflow-y: scroll;
    }
    & > p {
      width: 100%;
      text-align: center;
      font-weight: bold;
    }
  `,
  UserInfo: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;

    & > img {
      cursor: pointer;
    }
  `,
}
