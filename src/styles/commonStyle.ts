import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CS = {
  Link: styled(Link)`
    text-decoration-line: none;
    color: ${({ theme }) => theme.colors.black};
  `,
  DefaultContainer: styled.div`
    margin: 0 auto;
    padding-top: 6rem;
    padding-bottom: 3rem;
    background-color: ${(props) => props.theme.colors.white};
    height: fit-content;
    max-width: ${(props) => props.theme.width.default};
    min-height: ${(props) => props.theme.height.screen};
  `,
}
