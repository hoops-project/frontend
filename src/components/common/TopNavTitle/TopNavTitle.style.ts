import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0 5rem 0;
  `,
  Title: styled.h2`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.gray_400};
  `,
}
