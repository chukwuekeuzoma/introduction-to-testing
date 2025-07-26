import { describe, it, expect, test } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  test('add two number', () => {
    expect(add(5, 5)).toBe(10);
  });
});

describe('subtract', () => {
  it('subtract two numbers', () => {
    expect(subtract(20, 10)).toBe(10);
  });
});

describe('multiply', () => {
  it('multiply two numbers', () => {
    expect(multiply(5, 5)).toBe(25);
  });
});

describe('divide', () => {
  it('divide two numbers', () => {
    expect(divide(20, 5)).toBe(4);
  });
});
