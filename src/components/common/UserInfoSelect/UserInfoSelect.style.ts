import styled from 'styled-components'

export const S = {
  SelectWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem 0 1.5rem 0;

    & > div {
      width: 49%;
      padding: 0 0 1.4rem 0;
    }
  `,
  SelectSection: styled.section`
    padding-top: 3rem;
  `,
  InputLabel: styled.label`
    font-size: 1.4rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.colors.gray_500};
  `,
}
