import Menu from './page';
import { MENU } from '../constants';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Menu Page', () => {
  it('should render component successfully', () => {
    render(<Menu />);
    const categoryTestId = `category-${MENU[0].category.id}`;
    const foodTestId = `menu-item-${MENU[1].items[0].id}`;
    expect(screen.getByTestId(categoryTestId)).toBeInTheDocument();
    expect(screen.getByTestId(foodTestId)).toBeInTheDocument();
  });
});
