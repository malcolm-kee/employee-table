import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('can render', () => {
    render(<App />);
    expect(screen.getByText('Number of employee')).toBeVisible();
  });
});
