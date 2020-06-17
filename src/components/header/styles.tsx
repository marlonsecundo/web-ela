import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors, metrics } from '~/styles';

interface ContainerProps {
  readonly withBackcolor?: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  width: 100%;
  padding-right: 3rem;
  height: ${metrics.headerHeight};
  background-color: ${props =>
    props.withBackcolor ? colors.background : 'transparent'};
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
  padding-bottom: 0rem;
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
  max-height: 2.1rem;
`;

export const Menu = styled.nav`
  justify-content: space-between;
  width: 90%;
`;

export const MenuItem = styled(Link).attrs(props => ({
  activeStyle: {
    color: colors.highlight,
    borderBottom: `4px solid ${colors.highlight}`,
  },
}))`
  color: ${colors.primary};
  border-width: 10px;
  height: 2.2rem;
`;

export const TopMenuItem = styled(MenuItem)`
  margin-right: 2rem;
`;

export const SearchContainer = styled.div`
  height: 2rem;
`;

export const SearchIcon = styled.img`
  margin-right: 0.5rem;
  padding: 5px;
  width: 2rem;
  height: 2rem;
`;

export const InputSearch = styled.input.attrs(() => ({
  type: 'text',
}))`
  color: ${colors.primary};
  background-color: transparent;
  font-size: 1em;
  height: 2rem;

  &::placeholder {
    color: ${colors.primary};
  }
`;
