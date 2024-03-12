import History from './page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('History Page', () => {
  it('should render component successfully', () => {
    render(<History />);
    expect(screen.getByText('History')).toBeInTheDocument();
  });
});
