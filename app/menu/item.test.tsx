import Item from './item';
import { MENU } from '../constants';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Menu Item', () => {
  const addToCart = jest.fn();
  const data = {
    ...MENU[0].items[0],
    addToCart
  };

  it('should render component successfully', () => {
    render(<Item {...data} />);
    const element = screen.getByTestId(`menu-item-${data.id}`);
    expect(element).toBeInTheDocument();
  });

  it('should trigger addToCart successfully', () => {
    render(<Item {...data} />);
    const button = screen.getByTestId(`menu-item-button-${data.id}`);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(addToCart).toHaveBeenCalledTimes(1);
  });
});
