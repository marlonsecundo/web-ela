import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.footer`
  width: 100%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinksContainer = styled.section`
  width: 80%;
  height: 100%;
  margin-top: 4rem;

  border-top: 2px solid ${colors.background};
`;

export const ContactContainer = styled.section`
  width: 45%;
  height: 100%;
  padding-top: 1rem;
  flex-direction: column;
`;

export const ContactItem = styled.div`
  align-items: center;
  margin-bottom: 1rem;
`;

export const ContactTitle = styled.h4`
  color: ${colors.highlight};
`;

export const ContactIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: orange;
  margin-right: 1rem;
`;

export const ContactInfo = styled.span``;

export const SiteMap = styled.nav`
  width: 55%;
  height: 50;
  padding: 1rem;
  flex-wrap: wrap;
`;

export const SiteLink = styled.a`
  width: 33%;
  font-weight: bolder;
  color: ${colors.highlight};
`;

export const PortalBar = styled.section`
  width: 100%;
  height: 6.5rem;
  background-color: ${colors.portalBar};
`;
