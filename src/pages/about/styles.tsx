import styled from 'styled-components';
import { colors } from '~/styles';

export const Main = styled.main`
  padding: 2rem 15rem;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.section``;

export const CenterContainer = styled.article`
  width: 70%;
  padding-right: 4rem;
`;

export const Paragraph = styled.p``;

export const ListContainer = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li``;

export const Subtitle = styled.h3`
  color: ${colors.highlight};
`;

export const BodyInfo = styled.div``;

export const Diagram = styled.div``;

export const RightContainer = styled.aside`
  flex: 1;
  background-color: green;
`;
