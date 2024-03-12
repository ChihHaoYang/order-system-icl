import Item from './item';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('History Item', () => {
  const data = {
    id: 0,
    items: [
      {
        id: 0,
        name: 'test',
        quantity: 1,
        price: 20
      }
    ],
    total: 20
  };
  it('should render component successfully', () => {
    render(<Item {...data} />);
    const element = screen.getByTestId(`history-item-${data.id}`);
    expect(element).toBeInTheDocument();
  });
});
