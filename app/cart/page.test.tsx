import Cart from './page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Cart Page', () => {
  it('should render component successfully', () => {
    render(<Cart />);
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });
});
