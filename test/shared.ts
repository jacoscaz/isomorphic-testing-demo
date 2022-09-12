
import { functionThatThrows, functionThatWorks } from '../dist/index';

export const runTests = () => {

  describe('functionThatWorks', () => {
    it('should work', function () {
      const backend = this.backend;
      functionThatWorks(backend);
    });
  });

  describe('functionThatThrows', async () => {
    it ('should throw', function (done) {
      const backend = this.backend;
      try {
        functionThatThrows(backend);
      } catch (err) {
        done();
      }
    });
  });

};
