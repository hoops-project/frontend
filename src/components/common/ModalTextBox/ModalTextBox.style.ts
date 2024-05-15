import { styled } from 'styled-components'

export const S = {
  TextWrapper: styled.div`
  width:100%;
  margin:0 auto;

  & textarea {
    background-color:#F0F0F0;
    border-radius:10px;
    border: none;
    padding:1rem;
    width:95%;
    height:10rem;
    ::placeholder {
      color: #D7D7D7;
    }
  }
  `
}