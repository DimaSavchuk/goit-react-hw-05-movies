import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  width: 100%;
  background-color: #333;
  padding: 20px 0;
`;

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  margin-right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9800;
  }
`;
