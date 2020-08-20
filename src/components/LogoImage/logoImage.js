import React from 'react';
import { Link } from 'react-router-dom';
import LogoGuerrilha from '../../assets/img/pp.jpg';
import { LogoImage, LogoImageWrapper } from './style';

const Logo = () => (
  <LogoImageWrapper>
    <Link to="/">
      <LogoImage src={LogoGuerrilha} alt="Logo da galeria éranos" />
    </Link>
  </LogoImageWrapper>
);

export default Logo;
