import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.li`
  height: 30rem;
  width: 22rem;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.div`
  min-height: 48%;
  margin-right: 1.5rem;
  background: red;
`;

export const SeparatorContainer = styled.div`
  height: 1.5rem;
  width: 100%;
  align-items: center;
  margin: 0.7rem 0;
`;

export const Circle = styled.div`
  height: 1.5rem;
  min-width: 1.5rem;
  margin-right: -1rem;
  border-radius: 2rem;
  background-color: ${colors.background};
`;

export const Line = styled.div`
  height: 0.3rem;
  width: 100%;
  background-color: ${colors.background};
`;

export const DateText = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  margin-right: 1.5rem;
  color: ${colors.primary};
  margin: 0 0;
`;

export const Resume = styled.p`
  font-size: 0.9em;
  flex: 1;
  margin-right: 1.5rem;
  color: ${colors.primary};
`;

export const Button = styled.button`
  min-height: 2.1rem;
  background-color: transparent;
  border-radius: 2.5rem;
  border: 1px solid ${colors.primary};
  max-width: 8rem;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-weight: 700;
`;
