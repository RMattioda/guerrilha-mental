import React from 'react';
import { Link } from 'react-router-dom';
import LogoGuerrilha from '../../assets/img/pp.jpg';
import { LogoImage, LogoImageWrapper } from './style';

const Logo = ({className}) => (
  <LogoImageWrapper>
    <Link to="/">
      <LogoImage id="image" className={className} src={LogoGuerrilha} alt="Logo da galeria éranos" />
    </Link>
  </LogoImageWrapper>
);

export default Logo;
