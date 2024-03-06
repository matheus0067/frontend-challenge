import styled from 'styled-components'


export const ProductCardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(1rem);
    border-radius: 0rem 0rem 0.8rem 0.8rem;

    width: 21rem;
    height: 30rem;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        width: 25.6rem;
        height: 37.8rem; 
  }
`;

export const Img = styled.img`
        width: 25.6rem;
        height: 26rem;


        @media(min-width: ${props => props.theme.desktopBreakpoint}){
            width: 25.6rem;
            height: 30rem;  
      }
      
`
export const Div = styled.div`
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 0.8rem 1.2rem;
        width: 100%;
        `;
        
export const Title = styled.h3`
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 150%;
    color: var(--text-dark-2);
`;

export const Line = styled.hr`
          width: 22.8rem;
          height: 0.1rem;
          margin: 0.8rem 0;
          padding: 0rem;
          background: var(--shapes);
      `;

export const Price = styled.p`
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 150%;
    color: var(--shapes-dark:)
`;
