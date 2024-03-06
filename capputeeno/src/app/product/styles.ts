import styled from 'styled-components';
import media from "styled-media-query"

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const Section = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 3.2rem;
    margin-top: 2.4rem;

    ${media.lessThan('small')`
        margin-top: 0.5rem;
        justify-content: flex-end;
        flex-direction: column-reverse;
     `}
`

export const Img = styled.img`
    max-width: 64rem;
    width: 50%;
        
    ${media.lessThan('small')`
        width: 100%;
        height: auto;
    `}
`

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const Button = styled.button`
    background: #115D8C;
    mix-blend-mode: multiply;
    border-radius: 0.4rem;
    color: white;
    border: none;
    cursor: pointer;
    padding: 1rem 0;
    text-align: center;
    font-weight: 500;
    font-size: 1.6rem;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    ${media.lessThan('small')`
        font-size: 0.8rem;  
    `}
`

export const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`

export const Span = styled.span`
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 150%;
    color: var(--text-dark-2);
`

export const H2 = styled.h2`
    font-weight: 300;
    font-size: 3.2rem;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 1.2rem;
`

export const SpanPrice = styled.span`
    font-weight: 600;
    font-size: 2rem;
    color: var(--shapes-dark);
    margin-bottom: 2.4rem;
`

export const P = styled.p`
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--text-dark);
`

export const DivDescription = styled.div`
    margin-top: 2.4rem;

    h3 {
        text-transform: uppercase;
        color: var(--text-dark);
        font-weight: 500;
        font-size: 1.6rem;
    }

    p {
        font-size: 1rem;
    }
`