import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/posts/como-melhorar-seu-codigo-javascript').reply(200, {
  id: 1,
  title:
    'como melhorar seu codigo JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
  slug: 'como-melhorar-seu-codigo-javascript',
  date: moment().subtract(1, 'day').toDate().getTime(),
  autor: {
    id: 1,
    name: 'Lucas Nhimi',
    avatar: '/images/avatars/avatar_1.jpeg',
  },
  markdownText: `
  _Compact style:_
  
  Term 1
    ~ Definition 1
    
  Term 2
    ~ Definition 2a
    ~ Definition 2b`,
  tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
  image: '/images/posts/post1.png',
  likes: 10,
  comments: 30,
});

mock.onGet('/api/posts/como-migrar-para-react-hooks').reply(200, {
  id: 1,
  title: 'como-migrar-para-react-hooks',
  slug: 'como-melhorar-seu-codigo-javascript',
  date: moment().subtract(1, 'day').toDate().getTime(),
  autor: {
    id: 1,
    name: 'Belmiro Christo Neto',
    avatar: '/images/avatars/avatarBelmiro.jpg',
  },
  markdownText: `
  _Compact style:_
  
  Term 1
    ~ Definition 1
    
  Term 2
    ~ Definition 2a
    ~ Definition 2b`,
  tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
  image: '/images/posts/post1.png',
  likes: 10,
  comments: 30,
});

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'como melhorar seu codigo JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      autor: {
        id: 1,
        name: 'Lucas Nhimi',
        avatar: '/images/avatars/avatar_1.jpeg',
      },
      tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
      image: '/images/posts/post1.png',
      likes: 10,
      comments: 30,
    },
    {
      id: 2,
      title: 'COMO MIGRAR PARA REACT HOOKS | Tips & Tricks - React.js #01',
      slug: 'como-migrar-para-react-hooks',
      date: moment().subtract(1, 'day').toDate().getTime(),
      autor: {
        id: 2,
        name: 'Belmiro Christo Neto',
        avatar: '/images/avatars/avatarBelmiro.JPG',
      },
      tags: ['reactjs', 'javascript'],
      image: '/images/posts/post2.png',
      likes: 5,
      comments: 3,
    },
  ],
});

mock.onGet('/api/posts/user/belmiro.neto').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      autor: {
        id: 1,
        name: 'Belmiro',
        avatar: '/images/avatars/avatarBelmiro.jpg',
      },
      tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
      image: '/images/posts/post1.png',
      likes: 10,
      comments: 30,
    },
  ],
});
mock.onGet('/api/posts/user/lucasnhimi').reply(200, {
  posts: [],
});
