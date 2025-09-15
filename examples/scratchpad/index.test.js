import { test, expect, vi } from 'vitest';
import * as utils from './utils.js';

test('a super simple test', () => {
  const spySayHello = vi.spyOn(utils, 'sayHello');
  const sayHellResults = utils.sayHello('World');
  expect(spySayHello).toBeCalled();
  expect(sayHellResults).toBe('Hello, World');

  const spyAdd = vi.spyOn(utils, 'add');
  const addResults = utils.add(2, 3);
  expect(spyAdd).toBeCalled();
  expect(addResults).toBe(5);

  const spyrandom = vi.spyOn(Math, 'random').mockReturnValue(0.5);
  expect(Math.random()).toBe(0.5);

  // this one below is just to show how to mock a function

  const fixedRandom = vi.fn().mockReturnValue(0.75);
  expect(fixedRandom()).toBe(0.75);

  const mockFn = vi.fn();
  mockFn('first call');
  mockFn('second call');

  expect(mockFn).toBeCalledTimes(2);
  expect(mockFn).toBeCalledWith('first call');
  expect(mockFn).toBeCalledWith('second call');

  spyrandom.mockRestore();
  spyAdd.mockRestore();
  spySayHello.mockRestore();
});
