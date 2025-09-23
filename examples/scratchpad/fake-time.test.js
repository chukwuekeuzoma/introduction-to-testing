import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2020, 1, 1));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should call callback after delay', () => {
    const callback = vi.fn();
    delay(callback);
    vi.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalled();
  });
});

// this part was done by me
describe('mathsFunctions', () => {
  it('adding two numbers', () => {
    const sum = (a, b) => a + b;
    expect(sum(7, 3)).toBe(10);
  });

  it('subtracting of two numbers', () => {
    const subtract = (a, b) => a - b;
    expect(subtract(7, 3)).toBe(4);
  });
});
