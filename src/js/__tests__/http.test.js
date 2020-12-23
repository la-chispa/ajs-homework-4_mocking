import fetchData from '../http';

test('should be error', () => {
  function newError() {
    fetchData('https://server/user/1');

    expect(newError).toThrowError(new Error('Mock this!'));
  }
});
