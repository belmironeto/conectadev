import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { signOut } from '../../../actions/accountActions';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const account = useSelector((state) => state.account);
  const ref = useRef();
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = !!account.user;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSignOut = () => {
    handleClose();
    dispatch(signOut());
    navigate('/');
  };

  const handleLogIn = () => {
    navigate('/sign-in');
  };

  return (
    <>
      <Avatar
        ref={ref}
        alt={account.user && account.user.name}
        src={account.user && account.user.avatar}
        onClick={handleOpen}
      />
      {isAuthenticated ? (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={() => navigate(`/${account.user?.username}`)}>
            Perfil
          </MenuItem>

          <MenuItem>Meus Posts</MenuItem>
          <MenuItem>Minhas Conexões</MenuItem>
          <MenuItem onClick={handleSignOut}>Sair</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={() => navigate('/sign-up')}>Registrar</MenuItem>
          <MenuItem onClick={handleLogIn}>Entrar</MenuItem>
        </Menu>
      )}
    </>
  );
}
