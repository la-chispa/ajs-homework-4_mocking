import fetchData from '../http';

test('error', () => {
  function mistake() {
    fetchData('https://server/user/1');
  }
  expect(mistake).toThrowError(new Error('Mock this!'));
  // expect(() => {
  //   fetchData('https://server/user/2');
  // }).toThrow();
});
