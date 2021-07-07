import { Pen } from '../models/pen.model';

// eslint-disable-next-line no-undef
describe('Pen', () => {
  test('write', () => {
    const pen = new Pen('Hello World');
    expect(pen.write()).toBe('Hello World');
  });
});
