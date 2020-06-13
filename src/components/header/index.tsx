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
import searchIcon from '~/images/header/search.png';

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
        <TopMenuItem to="404">Acessibilidade</TopMenuItem>
        <TopMenuItem to="404">Language</TopMenuItem>
        <SearchContainer>
          <SearchIcon src={searchIcon} alt="Icone de Procura" />
          <InputSearch placeholder="Busca" />
        </SearchContainer>
      </TopMenu>
      <Menu>
        <MenuItem to="/">revELA</MenuItem>
        <MenuItem to="/about">Sobre a ELA</MenuItem>
        <MenuItem to="/care">Cuidados</MenuItem>
        <MenuItem to="404">Projetos</MenuItem>
        <MenuItem to="404">Contato</MenuItem>
      </Menu>
    </MenuContainer>
  </Container>
);

export default Header;
