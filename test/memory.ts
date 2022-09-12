
import { MemoryLevel } from 'memory-level';
import { runTests } from './shared';

export const runTestsInMemory = () => {

  describe('in memory', () => {

    beforeEach(function () {
      this.backend = new MemoryLevel();
    })

    runTests();

  });
};
