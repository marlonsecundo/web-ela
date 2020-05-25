import React from 'react';

import { Container, BackgroundImage, TitleContainer, Title } from './styles';

const ProjectCard: React.FC = () => {
  return (
    <Container>
      <BackgroundImage></BackgroundImage>
      <TitleContainer>
        <Title>Projeto 1</Title>
      </TitleContainer>
    </Container>
  );
};

export default ProjectCard;
