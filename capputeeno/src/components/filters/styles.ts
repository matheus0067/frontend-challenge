import styled from 'styled-components';
import { FilterItemProps } from './filterByType';
import media from 'styled-media-query';

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  list-style: none;

  ${media.lessThan('small')`
       gap: 0.8rem;
       
  `}
`;

export const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 1rem;
    line-height: 2.2rem;
   
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    color: #41414D;
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low);' : ''};

    ${media.lessThan('small')`
        font-size: 0.9rem;
        line-height: 1.5rem;
        text-align: left;
        
  `}
`;


