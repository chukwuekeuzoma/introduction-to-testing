import { render, screen, act} from '@testing-library/react';
import { expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {
    render(<AlertButton />);
  });

  it('should trigger an alert', async () => {
    const handleSubmit = vi.fn();
    render(<AlertButton handleSubmit={handleSubmit} defaultMessage={'Hello'}/>);
    const input = screen.getByLabelText(/message/i);
    const button = screen.getByRole('button', { name: /trigger alert/i });

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'Hello');
      await userEvent.click(button);
    });

    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalledWith('Hello'); 
  });
});
