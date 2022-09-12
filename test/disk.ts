
import { resolve } from 'path';
import { tmpdir } from 'os';
import { ClassicLevel } from 'classic-level';
import { runTests } from './shared';

export const runTestsOnDisk = () => {

  describe('on disk', () => {

    beforeEach(function () {
      this.backend = new ClassicLevel(resolve(tmpdir(), `quadstore-${Date.now()}`));
    });

    runTests();

    afterEach(function () {
      this.backend.close();
    });

  });


};
