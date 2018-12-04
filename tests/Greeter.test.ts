import { Greeter } from '../src/index';
test('My Greeter', () => {
  expect(Greeter('Venky')).toBe('Hello Venky');
});
