import React from 'react';
import Menu from '../Menu/menu';
import Footer from '../Footer/footer';
import styled from 'styled-components';

const Main = styled.main`
    flex: 1;
    padding-top: 30px;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
    display: flex;
    flex-direction: row;

    @media (max-width: 800px){
      flex-direction: column;
    }
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
