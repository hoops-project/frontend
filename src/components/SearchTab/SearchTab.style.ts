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
    gap:30px;
  `,
  SearchInputContainer: styled.div`
    position: relative;
    width: calc(100% - 2rem);
    height: 4.8rem;
    margin-bottom: 5rem;;

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
    margin-bottom: 5rem;
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
}
