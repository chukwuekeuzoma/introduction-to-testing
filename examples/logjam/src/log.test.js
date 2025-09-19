import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    it('should log in the console in development mode', () => {
      const consoleLogSpy = vi.fn();
      log('martins', {
        mode: 'development',
        productionCallback: consoleLogSpy,
      });
      expect(consoleLogSpy).not.toBeCalled();
    });
  });

  describe('production', () => {
    it('it should not call console.log', () => {
      const consoleLogSPy = vi.fn();
      log('martins', { mode: 'production', productionCallback: consoleLogSPy });
      expect(consoleLogSPy).toBeCalled();
    });
  });
  vi.restoreAllMocks();
});
