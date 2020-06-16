import React from 'react';

import { Container, BackgroundImage, TitleContainer, Title } from './styles';

interface Props {
  title: string;
}

const ProjectCard: React.FC<Props> = ({ title }) => (
  <Container>
    <BackgroundImage />
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
  </Container>
);

export default ProjectCard;
