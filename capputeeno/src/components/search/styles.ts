import styled from 'styled-components';
import media from "styled-media-query";

export const InputContainer = styled.div`
      position: relative;
      width: 35.2rem;
      

          svg {
            position: absolute;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
          }

        ${media.lessThan('small')`
        width: 22rem;
  `}
          
`;

export const SearchInput = styled.input`
      width: 100%;
      border-radius: 0.8rem;
      border: none;
      padding: 1rem 1.6rem;

      color: var(--bg-secondary);

      font-family: inherit;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2rem;
      color: var(--text-dark);
      
      ${media.lessThan('small')`
        font-size: 0.8rem;
        line-height: 1.5rem
  `}
    }
`;