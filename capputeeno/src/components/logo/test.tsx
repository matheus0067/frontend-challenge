import { screen, render } from '@testing-library/react';
import Logo from '.';

jest.mock('next/font/google', () => ({
  Saira_Stencil_One: jest.fn().mockReturnValue({
    className: 'mocked-class',
  }),
}));

describe('<Logo />', () => {
  it('renders with the correct text and default color', () => {
    render(<Logo>Capputeeno</Logo>);
    const logoElement = screen.getByRole('link', { name: /capputeeno/i });

    expect(logoElement).toHaveStyle({
      color: '#5D5D6D',
    });
  });
});
