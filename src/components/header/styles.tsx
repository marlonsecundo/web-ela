import styled from 'styled-components';
import { colors, metrics } from '~/styles';

export const Container = styled.header`
  display: flex;

  width: 95%;
  height: ${metrics.headerHeight};
`;

export const Logo = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const MenuContainer = styled.section`
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  padding: 1rem;
  justify-content: space-between;
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

export const SearchContainer = styled.div`
  width: 130px;
  background-color: purple;
`;
