import styled from 'styled-components'

export const S = {
  Container: styled.div`
    height: calc(100vh - 10rem);
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.gray_500};
    font-weight: bold;
  `,
}
