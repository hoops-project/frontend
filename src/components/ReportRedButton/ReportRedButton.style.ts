import styled from 'styled-components'
export const S = {
  WrapperButton: styled.div`
    margin: 0 auto;
    text-align: center;
    & Link {
      text-decoration: none;
    }
  `,

  RedButton: styled.button`
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.red};
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 1rem;
    cursor: pointer;
  `,
}
