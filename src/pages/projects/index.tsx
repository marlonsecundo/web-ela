import React from 'react';

import { Link } from 'gatsby';
import { Main, Paragraph, ListContainer } from './styles';
import Layout from '~/components/layout';
import TopTitle from '~/components/toptitle';
import ProjectCard from '~/components/projectcard';

const Projects: React.FC = () => (
  <>
    <Layout backcolor>
      <TopTitle label="Home | Projetos" title="Conheça os Projetos" />
      <Main>
        <Paragraph>
          Desenvolvimento de pesquisas e estudos voltados para o desenvolvimento
          de tecnologias e inovações para tratamento, monitoramento e definição
          de protocolos para doenças do neurônio motor, com especial atenção
          para a Esclerose Lateral Amiotrófica.
        </Paragraph>
        <ListContainer>
          <Link to="/project" state={{ title: 'Projeto 1', id: '1' }}>
            <ProjectCard title="Projeto 1" />
          </Link>
          <ProjectCard title="Projeto 1" />
          <ProjectCard title="Projeto 1" />
          <ProjectCard title="Projeto 1" />
          <ProjectCard title="Projeto 1" />
          <ProjectCard title="Projeto 1" />
        </ListContainer>
      </Main>
    </Layout>
  </>
);

export default Projects;
