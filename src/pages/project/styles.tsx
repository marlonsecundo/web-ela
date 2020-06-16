import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from '~/styles';

export const Main = styled.main`
  padding: 2rem 15rem;
  display: flex;
  flex-direction: column;
`;

export const TopLabel = styled.label`
  color: ${colors.highlight};
`;

export const BackButton = styled(Link)`
  color: ${colors.highlight};
  display: flex;
`;

export const BackIcon = styled.img``;

export const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${colors.highlight};
`;
