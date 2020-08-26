import React from 'react';
import { Link } from 'react-router-dom';
import { MenuWrapper, MenuItemWrapper, MenuItem } from './style';
import Logo from '../LogoImage/logoImage';

const Menu = () => (
  <MenuWrapper>
    <Logo />

    <MenuItemWrapper>
      <Link to="/">
        <MenuItem>
          Podcasts
        </MenuItem>
      </Link>

      <Link to="/">
        <MenuItem>
          Sobre
        </MenuItem>
      </Link>
    </MenuItemWrapper>
  </MenuWrapper>
);

export default Menu;
