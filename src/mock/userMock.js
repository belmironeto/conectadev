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

mock.onGet('/api/home/user/lucasnhimi').reply(200, {
  id: 2,
  name: 'Lucas Nhimi',
  username: 'lucasnhimi',
  email: 'lucasnhimi@conectadev.com',
  accessToken: 'dadadsadsa',
  avatar: 'images/avatars/avatar_1.jpeg',
  joinedIn: '06 de janeiro, 2020',
  work: 'Arquiteto de Software',
  totalPost: '388',
});

mock.onGet('/api/home/user/belmiro.neto').reply(200, {
  id: 1,
  name: 'Belmiro Christo Neto',
  username: 'belmiro.neto',
  email: 'belmiro.neto@live.com',
  accessToken: 'dadadsadsaadssa',
  avatar: 'images/avatars/avatarBelmiro.jpg',
  joinedIn: '19 de fevereiro, 2021',
  work: 'Analista de Infraestrutura',
  totalPost: '122',
});
