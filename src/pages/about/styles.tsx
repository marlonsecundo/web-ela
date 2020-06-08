import styled from 'styled-components';
import handsImg from '~/images/home@2x.png';
import { colors } from '~/styles';

export const Main = styled.main`
  padding: 2rem 15rem;
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  background-image: url(${handsImg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 15rem;
  width: 130%;
  margin-left: -20%;
  padding-left: 20%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 70%;
  flex-direction: column;
`;

export const ShadowDiv = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.2;
  width: 130%;
  height: 15rem;
  margin-left: -20%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 70%;
  z-index: 0;
`;

export const TopLabel = styled.p`
  margin-bottom: 2rem;
  padding: 1rem 15rem;
  color: ${colors.primary};
  z-index: 1;
`;

export const Title = styled.h1`
  padding: 0 15rem;
  color: ${colors.primary};
  z-index: 1;
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
