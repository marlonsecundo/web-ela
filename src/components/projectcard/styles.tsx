import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.section`
  width: 17rem;
  height: 20.9rem;
  flex-direction: column;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

export const BackgroundImage = styled.div`
  background-color: green;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 1;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 7rem;
  padding: 1.5rem;
  background-color: ${colors.hexToRGB(colors.highlight, '0.5')};
`;

export const Title = styled.h3`
  color: ${colors.background};
  opacity: 1;
`;
