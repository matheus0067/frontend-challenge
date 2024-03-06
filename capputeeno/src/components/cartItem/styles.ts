import styled from 'styled-components';
import media from 'styled-media-query';

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 21rem;

    border-radius: 0.8rem;
    background-color: white;

    position: relative;
`

export const Button = styled.button`
    position: absolute;
    top: 1.6rem;
    right: 2.4rem;

    border: none;
    background: transparent;
    cursor: pointer;

`

export const Img = styled.img`
    max-height: 100%;
    width: 25.6rem;
    border-radius: 0.8rem 0 0 0.8rem;

     ${media.lessThan('small')`
        width: 15rem;
        margin-right: -2rem;
        height: 25rem;
    `}
`

export const Div = styled.div`
   
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 1.6rem 2.4rem;
    line-height: 150%; 

    h4 {
        font-weight: 300;
        font-size: 2rem;

        ${media.lessThan('small')`
            font-size: 1.3rem;
            font-weight: 400;
    `}
    }

    p {
        font-weight: 400;
        font-size: 1.2rem;
        max-height: 50%;
        overflow: hidden;
        text-overflow: ellipsis;

        ${media.lessThan('small')`
            font-size: 0.8rem;
    `}
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        span {
            font-weight: 600;
            font-size: 1.6rem;
            color: (--shapes-dark);

            ${media.lessThan('small')`
                font-size: 1rem;
            `}
        }
    }
`

export const SelectQuantity = styled.select`
        padding: 0.8rem;
        border: 1.5rem solid var(--border-color);
        border-radius: 8rem;
        background-color: var(--bg-secondary);
        font-weight: 400;
        font-size: 1.6rem;

        ${media.lessThan('small')`
            font-size: 1rem;
            font-weight: 500;
            border-radius: 4rem;
    `}
`