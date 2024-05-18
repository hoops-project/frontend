import styled from 'styled-components'

export const S = {
  TopBackDiv: styled.div`
    position: relative;
    width: 100%;
    height: 31.5rem;
    background-color: ${(props) => props.theme.colors.white};
  `,
  TopTitleDiv: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 57rem;
    height: 18rem;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 0.5rem 0.8rem 0.6rem -0.6rem gray;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem 0 2rem;
    border-radius: 0.8rem;

    & > h2 {
      font-size: 4rem;
      font-weight: bold;
    }
  `,
}
