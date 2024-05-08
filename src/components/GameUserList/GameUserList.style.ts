import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    background-color: ${({ theme }) => theme.colors.white_gray};
    border-radius: 1rem;
    padding: 2rem 0 2rem 0;
    max-height: 50%;
    & > div:first-of-type {
      max-height: 37rem;
      margin-top: 2rem;
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
