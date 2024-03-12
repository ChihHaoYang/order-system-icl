import Item from './item';
import { MENU } from '../constants';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Cart Item', () => {
  const data = {
    ...MENU[0].items[0],
    quantity: 0
  };

  it('should render component successfully', () => {
    render(<Item {...data} />);
    const element = screen.getByTestId(`cart-item-${data.id}`);
    expect(element).toBeInTheDocument();
  });
});
