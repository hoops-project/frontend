import styled from 'styled-components'

export const S = {
  Header: styled.header`
    width: 100vw;
    height: 5.8rem;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.3);
  `,
  Container: styled.div`
    margin: 0 auto;
    max-width: ${(props) => props.theme.width.default};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Logo: styled.img`
    cursor: pointer;
    width: 10.2rem;
    height: 2.3rem;
  `,
  SearchGroup: styled.div`
    display: flex;
    align-items: center;

    & > a > img:first-of-type {
      margin-right: 2rem;
      margin-top: 0.5rem;
    }
  `,
}
