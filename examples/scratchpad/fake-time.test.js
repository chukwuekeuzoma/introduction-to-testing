import { vi, describe, it, expect } from 'vitest';

vi.useFakeTimers();

function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}

describe('delay function', () => {
  it.todo('should call callback after delay', () => {});
});

// this part was done by me
describe('mathsFunctions', () => {
  it('adding two numbers', ()=>{
    const sum = (a, b) => a + b;
    expect(sum(7, 3)).toBe(10);
  });

  it('subtracting of two numbers', () => {
    const subtract = (a, b) => a - b;
    expect(subtract(7, 3)).toBe(4);
  })
});