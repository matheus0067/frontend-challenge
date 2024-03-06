import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  ${media.lessThan('small')`
    width: 100%;
  `}
`;

export const CartListContainer = styled.div`
  h3 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
    margin-top: 2.4rem;

    ${media.lessThan('small')`
      font-size: 1.6rem;
      margin-top: 1.6rem;
    `}
  }

  p {
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 150%;
    color: var(--text-dark-2);

    ${media.lessThan('small')`
      font-size: 1.2rem;
    `}

    span {
      font-weight: 600;
    }
  }
`;

export const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 2.4rem;

  ${media.lessThan('small')`
    margin-top: 1.2rem;
  `}
`;

export const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 100%;
  padding: 1.6rem 2.4rem;

  background: white;

  h3 {
    font-weight: 600;
    font-size: 2rem;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    margin-left: -1rem;

    ${media.lessThan('small')`
      font-size: 1.6rem;
    `}
  }
`;

export const TotalItem = styled.div<{ isBold: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-weight: ${(props) => (props.isBold ? '600' : '400')};
  font-size: 1.6rem;
  line-height: 150%;
  margin-left: -1rem;

  margin-bottom: 1.2rem;

  ${media.lessThan('small')`
    font-size: 1.2rem;
  `}
`;

export const ShopBtn = styled.button`
  color: white;
  border-radius: 0.4rem;
  background: var(--success-color);
  padding: 1.2rem;
  width: 100%;
  border: none;
  margin-top: 4rem;
  cursor: pointer;

  ${media.lessThan('small')`
    margin-top: 2rem;
  `}
`;