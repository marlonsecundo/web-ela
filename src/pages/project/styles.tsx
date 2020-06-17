import styled from 'styled-components';
import { Link } from 'gatsby';
import { colors } from '~/styles';

export const Main = styled.main`
  padding: 1rem 15rem;
  display: flex;
  flex-direction: column;
`;

export const TopLabel = styled.label`
  color: ${colors.highlight};
  margin-bottom: 2.5rem;
  font-size: 0.9rem;
`;

export const BackButton = styled(Link)`
  color: ${colors.highlight};
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 14%;
`;

export const BackIcon = styled.img`
  margin: auto 0px;
`;

export const ButtonText = styled.strong`
  color: ${colors.highlight};
  font-weight: 700;
  margin-left: 0.5rem;
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${colors.highlight};
`;
