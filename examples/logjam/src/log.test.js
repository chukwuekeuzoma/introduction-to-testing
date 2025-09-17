import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'development');
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('should log in the console in development mode', () => {
      const consoleLogSPy = vi.spyOn(console, 'log');
      log('martins');
      expect(consoleLogSPy).toBeCalledWith('martins');
    });
  });

  describe('production', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'production');
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('it should not call console.log', () => {
      const consoleLogSpy = vi.spyOn(console, 'log');
      log('martins');
      expect(consoleLogSpy).not.toBeCalled();
      
    });
  });
});
