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
  LogoContainer,
  SearchIcon,
  InputSearch,
} from './styles';

import logoRevela from '~/images/header/logo-revela.png';

interface HeaderProps {
  withBackcolor?: boolean;
}

const Header: React.FC<HeaderProps> = ({ withBackcolor }) => (
  <Container withBackcolor={withBackcolor}>
    <LogoContainer>
      <Logo src={logoRevela} alt="Logo Rev Ela" />
    </LogoContainer>
    <MenuContainer>
      <TopMenu>
        <TopMenuItem to="/">Acessibilidade</TopMenuItem>
        <TopMenuItem to="/">Language</TopMenuItem>
        <SearchContainer>
          <SearchIcon />
          <InputSearch placeholder="Busca" />
        </SearchContainer>
      </TopMenu>
      <Menu>
        <MenuItem to="/">revELA</MenuItem>
        <MenuItem to="/about">Sobre a ELA</MenuItem>
        <MenuItem to="/">Cuidados</MenuItem>
        <MenuItem to="/">Projetos</MenuItem>
        <MenuItem to="/">Contato</MenuItem>
      </Menu>
    </MenuContainer>
  </Container>
);

export default Header;
