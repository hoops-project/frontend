import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    height: ${theme.height.full};
    max-width: ${theme.width.default};
    padding: 6rem 0;
    margin: 50px auto;
    min-height: 100vh;
  `,
  SearchInputContainer: styled.div`
    position: relative;
    width: calc(100% - 1rem);
    height: 4.8rem;
    margin: 0 1rem;
    border: 0.1rem solid ${theme.colors.gray_400};
    border-radius: 0.8rem;
    background-color: ${theme.colors.white_gray};
  `,
  SearchIcon: styled.img`
    position: absolute;
    right: 0.5rem;
    top: 50%; // 상단에서 50% 위치
    transform: translateY(-50%);
    width: 1.6rem;
    height: 1.6rem;
    cursor: pointer;
  `,
  Search: styled.input`
    width: 100%;
    height: 4.8rem;
    border: 0.1rem solid ${theme.colors.gray_400};
    border-radius: 0.8rem;
    padding: 0 1.5rem; // 패딩을 양쪽으로 설정
    outline: none;
    font-size: 1.6rem;
    color: ${theme.colors.gray_700};
    background-color: ${theme.colors.white_gray};
    cursor: ${(props) => (props.readOnly ? 'not-allowed' : 'text')};

    &::placeholder {
      color: ${theme.colors.gray_400};
    }
  `,
  TopTit: styled.div`
    display: flex;
    margin-top: 5rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2rem;
    width: 100%;
    p {
      margin-left:10rem;

      &:first-child {
        margin-left: 1rem;
      }
      &:nth-child(2) {
        margin-left: 10rem;
      }
      &:last-child {
        margin-left: 22rem;
      }
`,
  UnderLine: styled.hr`
    background-color: ${theme.colors.gray_400};
  `,
  ListBox: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  `,
  ListItem: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 1rem;
      button {
        margin-left:auto;
      }
    
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.gray_400};
    }
    p {
      width:10rem;
      text-align: center;
      margin: 0.5rem;
      color: ${theme.colors.gray_700};
      border: 1px solid ${theme.colors.gray_300};
      border-radius: 3rem;
      padding: 1.5rem;
      &:first-child {
        width:8rem;
        text-align: left;
        border: none;
        font-weight:700;
        color:${theme.colors.black};
      }
      &:nth-child(2) {
        border: none;
        margin: 0;
      }
  `,
}
