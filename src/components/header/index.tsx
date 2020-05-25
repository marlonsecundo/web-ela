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

const Header: React.FC = () => (
  <Container>
    <Logo>
      <h1>revELA</h1>
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
        <MenuItem>Contatos</MenuItem>
      </Menu>
    </MenuContainer>
  </Container>
);

export default Header;
