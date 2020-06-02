import styled from 'styled-components';
import { colors, metrics } from '~/styles';

export const Container = styled.header`
  display: flex;

  width: 95%;
  height: ${metrics.headerHeight};
`;

export const LogoContainer = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

export const MenuContainer = styled.section`
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  justify-content: space-between;
  flex: 1;
`;

export const TopMenu = styled.nav`
  border: 0px;
  border-bottom: 1px;
  border-bottom-color: ${colors.background};
  border-style: solid;
  padding-bottom: 0.7rem;
  padding-left: 2rem;
  width: 100%;
  justify-content: flex-end;
`;

export const Menu = styled.nav`
  justify-content: space-between;
  width: 90%;
`;

export const MenuItem = styled.a`
  color: ${colors.primary};
`;

export const TopMenuItem = styled(MenuItem)`
  margin-right: 2rem;
`;

export const SearchContainer = styled.div``;

export const SearchIcon = styled.div`
  background-color: fuchsia;
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 0.5rem;
`;

export const InputSearch = styled.input.attrs(() => ({
  type: 'text',
}))`
  color: ${colors.primary};
  background-color: transparent;
  font-size: 1em;

  &::placeholder {
    color: ${colors.primary};
  }
`;
