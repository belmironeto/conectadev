import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function WritePost() {
  const navigate = useNavigate();
  const account = useSelector((state) => state.account);

  const isAuthenticated = !!account.user;

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/post/new');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <Button color="primary" variant="contained" onClick={handleClick}>
      Novo Post
    </Button>
  );
}
