import styled from 'styled-components';

export const Logo = styled.a`
    color: var( --logo-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none;
    margin-left: -1rem;

    @media(min-width: ${props => props.theme.tableBreakpoint}){
      font-size: 2.4rem;
  }

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
      font-size: 4rem;
  }
`;
