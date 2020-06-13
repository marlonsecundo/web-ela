import styled from 'styled-components';
import { colors } from '~/styles';

export const Main = styled.main`
  padding: 2rem 15rem;
  display: flex;
`;

export const Paragraph = styled.p``;

export const Subtitle = styled.h3`
  color: ${colors.highlight};
`;

export const CenterContainer = styled.article`
  width: 70%;
  padding-right: 4rem;
`;

export const RightContainer = styled.aside`
  flex: 1;
  background-color: green;
`;

export const BottomContent = styled.section`
  padding: 2rem 15rem;
  background-color: ${colors.highlight};
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const BottomTitle = styled.h2`
  color: ${colors.background};
  align-self: flex-start;
`;

export const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;
