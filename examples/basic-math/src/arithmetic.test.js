import { describe, it, expect, test } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  test('add two number', () => {
    expect(add(5, 5)).toBe(10);
  });

  it('should covert number to string and add', () => {
    expect(add('10', '10')).toBe(20);
  });

  it('should throw an error if inputs are not numbers or numeric strings', () => {
    expect(() => add('a', 5)).toThrow(
      'Invalid input: both arguments must be numbers or numeric strings.',
    );
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
