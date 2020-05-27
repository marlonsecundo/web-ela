import React from 'react';

import {
  Container,
  Logo,
  Menu,
  MenuContainer,
  TopMenu,
  TopMenuItem,
  MenuItem,
  SearchContainer,
} from './styles';

import logo from '~/images/header/logo-revela.png';

const Header: React.FC = () => (
  <Container>
    <Logo>
      <img src={logo} />
    </Logo>
    <MenuContainer>
      <TopMenu>
        <TopMenuItem>Acessibilidade</TopMenuItem>
        <TopMenuItem>Language</TopMenuItem>
        <SearchContainer></SearchContainer>
      </TopMenu>
      <Menu>
        <MenuItem>revELA</MenuItem>
        <MenuItem>Sobre a ELA</MenuItem>
        <MenuItem>Cuidados</MenuItem>
        <MenuItem>Projetos</MenuItem>
        <MenuItem>Contato</MenuItem>
      </Menu>
    </MenuContainer>
  </Container>
);

export default Header;
