import React from 'react';

import { NavBar, Wrapper, NavLinkStyled } from './Header.styled';
import { Container } from 'components/App/App.styled';

import { Outlet } from 'react-router-dom';
import { ROUTES } from 'services/routes';

const Header = () => {
  return (
    <>
      <NavBar>
        <Container>
          <Wrapper>
            <NavLinkStyled to={ROUTES.HOME}>Home</NavLinkStyled>
            <NavLinkStyled to={ROUTES.MOVIES}>Movies</NavLinkStyled>
          </Wrapper>
        </Container>
      </NavBar>

      <Outlet />
    </>
  );
};

export default Header;
