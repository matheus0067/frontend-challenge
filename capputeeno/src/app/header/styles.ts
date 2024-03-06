import styled from 'styled-components';

export const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2.4rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;
    }

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 2rem 16rem;
    }
`