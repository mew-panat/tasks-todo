import { render, screen } from '@testing-library/react';
import SideBar from '../SideBar'

describe('sidebar', () => {
  it('should check sidebar', () => {
    render(<SideBar />)
    const nameEl = screen.getByText(/Today/);
    expect(nameEl).toBeInTheDocument();
  })
});
