import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MenuWrapper, MenuItemWrapper, MenuItem } from './style';
import Logo from '../LogoImage/logoImage';

function Menu () {

  const inicialValue = '';

  const value = useRef(inicialValue);

  useEffect(()=>{
    document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        value.current = 'bottom';
        document.getElementById('nav-menu').classList.add(value.current);
        document.getElementById('image').classList.add(value.current);
      } else if(scrolled < 200) {
        value.current = '';
        document.getElementById('nav-menu').classList.remove('bottom');
        document.getElementById('image').classList.remove('bottom');
      }
      console.log(scrolled + ' ' + value.current)
    });
  });


  return(
    <MenuWrapper id="nav-menu" className={value.current}>
      <Logo className={value.current} />
  
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
} 

export default Menu;
