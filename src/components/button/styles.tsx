import styled from 'styled-components';
import { colors, metrics } from '~/styles';

export const Container = styled.button`
  width: 10rem;
  height: 2.1rem;
  justify-content: center;
  background-color: ${colors.background};
  color: ${colors.highlight};
  border-radius: 40px;
  font-weight: ${metrics.ExtraBold};
`;
