import React from 'react';

import { Container, CenterContainer, RightContainer } from './styles';

interface Props {
  centerContent: React.ReactNode;
  asideContent?: React.ReactNode;
}

const AsideLayout: React.FC<Props> = ({ centerContent, asideContent }) => (
  <Container>
    <CenterContainer>{centerContent}</CenterContainer>
    <RightContainer>{asideContent}</RightContainer>
  </Container>
);

export default AsideLayout;
