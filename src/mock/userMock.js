import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//   id: 1,
//   username: 'belmiro.neto@live.com',
// });

mock.onPost('/api/home/login').reply((config) => {
  //console.log(config);
  const { email, password } = JSON.parse(config.data);
  //console.log(email, password);

  if (email !== 'belmiro.neto@live.com' || password !== '102030') {
    return [400, { message: 'E-mail ou senha incorretos' }];
  }
  const user = {
    id: 1,
    name: 'Belmiro Christo Neto',
    email: 'belmiro.neto@live.com',
  };

  return [200, { user }];
});
