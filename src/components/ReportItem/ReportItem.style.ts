import { styled } from 'styled-components'

export const S = {
  ContentBox: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  TopTit: styled.div`
  & .tit_box {
      display: flex;
      align-items: center;
      text-align: center;
      font-weight: 700;
      font-size: 2rem;
      width: 100%;

      > p {
        padding: 0 2.5rem;
      }
      > .styled {
        padding: 0 18rem;
      }`,

  ListBox: styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;

    > * {
      padding: 0 2.5rem;
    }
    & button:hover {
      color: #1570ff;
      border: 0.1rem solid #1570ff;
    }
    & .selected {
      color: #1570ff;
      border: 0.1rem solid #1570ff;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    gap: 2rem;
    padding: 0 6.5rem;

    & button {
      background-color: transparent;
    }
  `,
  Button: styled.button`
      border: 1px solid #d9e0e6;
      border-radius: 2rem;
      outline: none;
      padding: 1rem 3rem;
      cursor: pointer;
    }
  `,
  SubmitWrapper: styled.div`
    display: flex;
    gap: 2rem;
  `,
}
