import React from 'react';
import Layout from '~/components/layout';

import {
  Main,
  Background,
  Title,
  SubTitle,
  TitleContainer,
  LandingPage,
  ELAAbout,
  ProjectsPage,
  AboutDescription,
  AboutTitle,
  VideoContainer,
  ProjectsTitle,
  ProjectsMenu,
  ProjectsContainer,
  TextContainer,
  RevElaAbout,
  RevVideoContainer,
  RevElaTitle,
  RevTextContainer,
  RevElaDescription,
  Img,
} from './styles';
import StyledButton from '~/components/button';
import ProjectCard from '~/components/projectcard';

import handsImg from '~/images/home.png';

const Home: React.FC = () => (
  <>
    <Background>
      <Img src={handsImg} alt="Imagem Central de Fundo, aperto de mãos" />
    </Background>
    <Layout>
      <Main>
        <LandingPage>
          <TitleContainer>
            <Title>A VIDA COM ELA</Title>
            <SubTitle>
              O Portallogo reúne sed diam nonummy nibh euismod tincidunt ut para
              os portadores de Esclerose Lateral Amiotrófica
            </SubTitle>
          </TitleContainer>
        </LandingPage>
        <ProjectsPage>
          <ELAAbout>
            <TextContainer>
              <AboutTitle>Sobre Esclerose Lateral Amiotrófica</AboutTitle>
              <AboutDescription>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis consequat.
              </AboutDescription>
              <StyledButton>Saiba Mais</StyledButton>
            </TextContainer>

            <VideoContainer />
          </ELAAbout>

          <ProjectsContainer>
            <ProjectsTitle>Conheça os projetos</ProjectsTitle>
            <ProjectsMenu>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </ProjectsMenu>
            <StyledButton>Todos os Projetos</StyledButton>
          </ProjectsContainer>

          <RevElaAbout>
            <RevVideoContainer />
            <RevTextContainer>
              <RevElaTitle>Sobre o revEla</RevElaTitle>
              <RevElaDescription>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat laoreet dolore magna aliquam erat
                volutpat.
              </RevElaDescription>
              <StyledButton>Saiba mais</StyledButton>
            </RevTextContainer>
          </RevElaAbout>
        </ProjectsPage>
      </Main>
    </Layout>
  </>
);

export default Home;
