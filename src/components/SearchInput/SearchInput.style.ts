import styled from 'styled-components'

export const S = {
  InputContainer: styled.div`
    position: relative;
  `,
  SearchIcon: styled.img`
    position: absolute;
    left: 1rem;
    top: 1rem;
  `,
  Search: styled.input`
    width: 35rem;
    height: 4rem;
    padding-left: 4rem;
    margin-right: 2rem;
    border-radius: 5rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.gray_100};
    outline: none;
  `,
}
