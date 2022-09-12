
import type { ClassicLevel } from 'classic-level';
import type { MemoryLevel } from 'memory-level';

export const functionThatThrows = (backend: ClassicLevel | MemoryLevel) => {
  throw new Error('Some error');
};

export const functionThatWorks = (backend: ClassicLevel | MemoryLevel) => {

};
