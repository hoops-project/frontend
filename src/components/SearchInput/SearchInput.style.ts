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
  SearchResult: styled.div`
    position: absolute;
    width: 80%;
    max-height: 35rem;
    overflow-y: scroll;
    padding: 0 1.5rem 0 1.5rem;
    left: 2.2rem;
    color: ${(props) => props.theme.colors.gray_700};
    background-color: ${(props) => props.theme.colors.white};
    border-right: 0.1rem solid ${(props) => props.theme.colors.gray_400};
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray_400};
    border-left: 0.1rem solid ${(props) => props.theme.colors.gray_400};
    border-radius: 0 0 0.8rem 0.8rem;

    & > a {
      display: block;
      padding: 1.5rem 0 1.5rem 0;
      border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray_300};

      & > span {
        margin-right: 1rem;
      }

      & > span:nth-child(2),
      & > span:nth-child(3),
      & > span:nth-child(4) {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.gray_500};
      }
    }
  `,
  NoResult: styled.p`
    padding: 5rem;
    text-align: center;
  `,

  QueryTitle: styled.div`
    padding: 3rem 0 3rem 0;
    & > span:first-child {
      font-weight: bold;
      font-size: 1.8rem;
    }
  `,
}
