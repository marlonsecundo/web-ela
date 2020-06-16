import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.li`
  width: 19rem;
  height: 22.9rem;
  display: flex;
  flex-direction: column-reverse;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  overflow: hidden;
  background-color: red;
  border-radius: 5px;
  position: relative;
`;

export const BackgroundImage = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  opacity: 1;
  position: absolute;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 6rem;
  padding: 1rem;
  z-index: 1;
  background-color: ${colors.hexToRGB(colors.highlight, '0.7')};
`;

export const Title = styled.h3`
  color: ${colors.background};
  opacity: 1;
`;
