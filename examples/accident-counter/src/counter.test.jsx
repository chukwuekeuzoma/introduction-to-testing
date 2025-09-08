import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });
    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const counter = screen.getByTestId('counter-count');
    const dayLabel = screen.getByTestId('counter-unit');
    if (counter.textContent === '0') {
      expect(dayLabel).toHaveTextContent('days');
    }
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    await act(async () => {
      await userEvent.click(incrementButton);
    });
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    const counter = screen.getByTestId('counter-count');
    const dayLabel = screen.getByTestId('counter-unit');
    if (counter.textContent === '1') {
      expect(dayLabel).toHaveTextContent('day');
    }
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    const deCrementButton = screen.getByRole('button', {
      name: /decrement/i,
    });
    await act(async () => {
      await userEvent.click(deCrementButton);
    });
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('does not allow decrementing below 0', async () => {
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    await act(async () => {
      await userEvent.click(deCrementButton);
    });
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const resetButton = screen.getByRole('button', { name: /reset/i });
    await userEvent.click(resetButton);
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('updates the document title based on the count', async () => {
    const incrementButton = screen.getByRole('button', {
      name: /increment/i,
    });
    await userEvent.click(incrementButton);
    expect(document.title).toBe('1 day — Accident Counter');
    await userEvent.click(incrementButton);
    expect(document.title).toBe('2 days — Accident Counter');
  });
});
