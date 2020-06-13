import React from 'react';

import { Container, BackgroundImage, TitleContainer, Title } from './styles';

const ProjectCard: React.FC = () => (
  <Container>
    <BackgroundImage />
    <TitleContainer>
      <Title>Projeto</Title>
    </TitleContainer>
  </Container>
);

export default ProjectCard;
