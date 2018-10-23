import { isEmailValid } from '../utils/form';

test('check if test@test.com is valid', () => {
  expect(isEmailValid('test@test.com')).toBe(true);
});

test('check if test@testcom is not valid', () => {
  expect(isEmailValid('test@testcom')).toBe(false);
});
