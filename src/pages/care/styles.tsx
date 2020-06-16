import styled from 'styled-components';
import { colors } from '~/styles';

export const Main = styled.main`
  padding: 2rem 15rem;
  display: flex;
`;

export const Article = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
