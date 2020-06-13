import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  width: 26.4%;
  height: 17rem;
  background-color: green;
`;

export const Content = styled.section`
  flex-direction: column;
  flex: 1;

  width: 18rem;
  height: 17rem;
  max-width: 18rem;
  max-height: 17rem;
  min-width: 18rem;
  min-height: 17rem;

  margin: 1rem 3%;

  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  padding-top: 1.5rem;

  border-style: solid;
  border-width: 1px;
  border-color: ${colors.primary};
  border-radius: 5px;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 30%;
`;

export const CardTitle = styled.h4`
  text-align: center;
  line-height: 1.5em;
  color: ${colors.primary};
`;
