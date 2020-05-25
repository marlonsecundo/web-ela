import React from 'react';

import {
  Container,
  LinksContainer,
  ContactContainer,
  SiteMap,
  ContactTitle,
  ContactIcon,
  ContactInfo,
  ContactItem,
  SiteLink,
  PortalBar,
} from './styles';

const Footer: React.FC = () => (
  <Container>
    <LinksContainer>
      <ContactContainer>
        <ContactTitle>Contato</ContactTitle>

        <ContactItem>
          <ContactIcon></ContactIcon>
          <ContactInfo>Endereço do Lais</ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactIcon></ContactIcon>
          <ContactInfo>Loremipsum@lais.ufrn.br</ContactInfo>
        </ContactItem>
      </ContactContainer>

      <SiteMap>
        <SiteLink>Logo</SiteLink>
        <SiteLink>Projetos</SiteLink>
        <SiteLink>Ajuda</SiteLink>
        <SiteLink>Sobre ELA</SiteLink>
        <SiteLink>Acessibilidade</SiteLink>
        <SiteLink>Site LAIS</SiteLink>
        <SiteLink>Cuidados</SiteLink>
        <SiteLink>Language</SiteLink>
      </SiteMap>
    </LinksContainer>

    <PortalBar></PortalBar>
  </Container>
);

export default Footer;
