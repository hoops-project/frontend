import { styled } from 'styled-components'
import { theme } from '../../../styles/theme'

export const S = {
  Wrapper: styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-bottom: 2px solid ${theme.colors.gray_300};

    & p {
      font-size: 1.6rem;
      font-weight: 500;
      color: #000;
    }
  `,

  StarContainer: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,

  Star: styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  &.on .star {
    color: ${theme.colors.yellow}; // 활성화된 별 색상
  }
  &.off .star {
    color: ${theme.colors.gray_300} // 비활성화된 별 색상
  }
  .star {
    font-size: 3rem;
  }
`,

}
