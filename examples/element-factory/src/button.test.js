import { screen, fireEvent } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { createButton } from './button.js';

describe('createButton', () => {
  it.skip('should create a button element', () => {
    document.body.appendChild(createButton());
    const button = screen.getByRole('button', { name: 'Click Me' });
    expect(button).toBeInTheDocument();
    // const button = createButton();
    // expect(button).toBeInstanceOf(HTMLButtonElement);
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    document.body.appendChild(createButton());

    const button = screen.getByRole('button', { name: 'Click Me' });

    // fireEvent.click(button);
    await userEvent.click(button);
    expect(button.textContent).toBe('Clicked!');
  });
});
