import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('header', () => {
  it('should show name of header', () => {
    render(<Header />);
    const nameEl = screen.getByText(/tewt/);
    expect(nameEl).toBeInTheDocument();
  });
});
