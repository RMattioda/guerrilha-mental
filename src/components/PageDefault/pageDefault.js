import React from 'react';
import Menu from '../Menu/menu';
import Footer from '../Footer/footer';
import styled from 'styled-components';

const Main = styled.main`
    flex: 1;
    padding-top: 30px;
    padding-left: 2%;
    padding-right: 2%;
   
`;

const PageDefault = ({ children }) => (
  <>
    <Menu />

      <Main>

      { children }

      </Main>

    <Footer />
  </>
);

export default PageDefault;
