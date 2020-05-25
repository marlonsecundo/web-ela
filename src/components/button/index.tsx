import React from 'react';

import { Container } from './styles';

interface Props {
  outline?: boolean;
  children: React.ReactNode;
}

const StyledButton: React.FC<Props> = ({ children }: Props) => (
  <Container>{children}</Container>
);

export default StyledButton;
