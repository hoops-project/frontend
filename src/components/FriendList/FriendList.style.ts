import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
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
        margin-left:22rem;
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
      cursor:pointer;
      &:first-child {
        width:9rem;
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
