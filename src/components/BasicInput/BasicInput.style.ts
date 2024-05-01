import { styled } from 'styled-components'

export const S = {
  BasicInputContainer: styled.div`
    width: 100%;
    max-width: ${(props) => props.theme.width.default};
    margin: 5rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    & div {
      width: 100%;
      & label {
        display: block;
        font-size: 1.5rem;
        color: #4b5a64;
        margin-bottom: 1rem;
      }
    }
  `,
  BasicFormBox: styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    & input {
        padding:1.2rem 0 0 1.2rem;
        border-radius:1rem;
        background-color;#E6ECF1;
        border:1px solid #E6ECF1;
        outline:none;
        width:90%;
    }
    & button {
        color:${(props) => props.theme.colors.blue};
        border-radius:1rem;
        padding:1.5rem;
        border:none;
        background:#BCE8FF;
        width:10%;
        cursor:pointer;
      }
    `,
}
