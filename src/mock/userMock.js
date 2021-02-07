import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    id: 1,
    name: 'Belmiro Christo Neto',
    email: 'belmiro.neto@live.com',
    avatar: '/images/avatars/avatarBelmiro.jpg',
    username: 'belmiro.neto',
  },
});

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
    avatar: '/images/avatars/avatarBelmiro.jpg',
    username: 'belmiro.neto',
  };

  return [200, { user }];
});
