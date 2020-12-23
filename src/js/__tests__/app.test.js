import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('mock should be called', () => {
  fetchData.mockReturnValue('{}');
  getLevel(1);

  expect(fetchData).toBeCalledTimes(1);
});

test('mock should be called with userID', () => {
  fetchData.mockReturnValue('{}');
  getLevel(1);

  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('response.status should be ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });
  const response = getLevel(1);

  expect(response).toEqual('Ваш текущий уровень: 1');
});

test('response.status should be !== ok', () => {
  fetchData.mockReturnValue({ status: '', level: 1 });
  const response = getLevel(1);

  expect(response).toEqual('Информация об уровне временно недоступна');
});
