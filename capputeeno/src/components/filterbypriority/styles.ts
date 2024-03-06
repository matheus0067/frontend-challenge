import styled from 'styled-components';
import media from "styled-media-query";

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Button = styled.button`
        border: none;
        background: transparent;
        cursor: pointer;

        font-family: inherit;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.2rem; 
        color: var(--text-dark);

        display: flex;
        align-items: center;
        justify-content: center;

        

        ${media.lessThan('small')`
        font-size: 0.9rem;
        line-height: 0.9rem;
        text-transform: uppercase;
        margin-bottom: -4.2rem
         `}

        svg {
          margin-left: 1.6rem;

          ${media.lessThan('small')`
           margin-left: -1.9rem;
           margin-bottom: -1rem;
            `}
        }

      
       
    `

export const PriorityFilter = styled.ul`
    position: absolute;
    width: 25rem;
    background: #FFFFFF;
    box-shadow: 0rem 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    padding: 1.2rem 1.6rem;
    z-index: 999;

    list-style: none;

    top: 100%;
    right: 0.8rem;

    ${media.lessThan('small')`
         width: 11rem;
         background: #ececec; 
       `}

    li {
      color: var(--text-dark);
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
      cursor: pointer;

      ${media.lessThan('small')`
          font-size: 0.8rem;
          text-align: center;
            `}
    }

    li + li {
      margin-top: 0.4rem;
    }

`;