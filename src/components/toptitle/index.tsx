import React from 'react';

import { Container, ShadowDiv, TopLabel, Title } from './styles';

interface TopTitleProps {
  label: string;
  title: string;
}

const TopTitle: React.FC<TopTitleProps> = ({ label, title }) => (
  <Container>
    <ShadowDiv />
    <TopLabel>{label}</TopLabel>
    <Title>{title}</Title>
  </Container>
);

export default TopTitle;
