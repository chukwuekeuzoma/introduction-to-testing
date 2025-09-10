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

  spyAdd.mockRestore();
  spySayHello.mockRestore();
});
