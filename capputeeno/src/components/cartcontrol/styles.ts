import styled from 'styled-components';
import media from "styled-media-query"

export const CartCount = styled.span`
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 100%;
        padding: 0 0.5rem;
        font-size: 0.8rem;

        background-color: var(--delete-color);
        color: white; 

        margin-left: -2.9rem;
        margin-top: 1.5rem;
`

export const Container = styled.div`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;

    ${media.lessThan('small')`
        font-size: 0.9rem;
        line-height: 1.5rem;
        margin-left: -8rem;
  `}
`