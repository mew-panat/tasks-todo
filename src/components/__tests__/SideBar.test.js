import { render, screen } from '@testing-library/react';
import SideBar from '../SideBar'

describe('sidebar', () => {
  it('should check sidebar today', () => {
    render(<SideBar />)
    const nameEl = screen.getByText(/Today/);
    expect(nameEl).toBeInTheDocument();
  })

  it('should check sidebar Inbox', () => {
    render(<SideBar />)
    const nameEl = screen.getByText(/Inbox/);
    expect(nameEl).toBeInTheDocument();
  })
});
