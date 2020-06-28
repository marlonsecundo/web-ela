import React from 'react';

import {
  Main,
  TopLabel,
  BackButton,
  BackIcon,
  Title,
  Article,
  ButtonText,
  BottomContent,
  BottomTitle,
  ListContainer,
} from './styles';
import Paragraph from '~/components/paragraph';
import Subtitle from '~/components/subtitle';

import AsideLayout from '~/components/aside-layout';
import Layout from '~/components/layout';

import BackArrow from '~/images/project/arrow.png';
import ProjectNewsItem from '~/components/project-news-item';

interface Props {
  location: {
    state: {
      title: string;
      id: string;
    };
  };
}

const Project: React.FC<Props> = ({ location }) => (
  <>
    <Layout backcolor>
      <Main>
        <TopLabel>{`Home | Projetos | ${location.state.title}`}</TopLabel>
        <BackButton to="/projects">
          <BackIcon src={BackArrow} alt="Seta Direita" />
          <ButtonText>Todos os Projetos</ButtonText>
        </BackButton>

        <AsideLayout
          centerContent={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <Article>
              <Title>{location.state.title}</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputa velit esse eros et. Ut wisi enim
                ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat.
              </Paragraph>
              <Subtitle>
                Duis autem vel eum iriure dolor in hendrerit in
              </Subtitle>
              <Paragraph>
                vulputa velit esse eros et. Duis autem vel eum iriure
                dolor in hendrerit in vulputa velit esse eros et. Ut
                wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputa velit esse eros et. Duis autem
                vel eum iriure dolor in hendrerit in vulputa velit
                esse eros et. Duis autem vel eum iriure dolor in
                hendrerit in vulputa velit esse eros et vel eum iriure
                dolor in hendrerit. Duis autem vel eum iriure dolor in
                hendrerit in vulputa velit esse eros et Ut wisi enim
                ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in
                hendrerit in vulputa velit esse eros et. Duis autem
                vel eum iriure dolor in hendrerit in vulputa velit
                esse eros et. Duis autem vel eum iriure dolor in
                hendrerit in vulputa velit esse eros et vel eum iriure
                dolor in hendrerit.
              </Paragraph>
            </Article>
          }
        />
      </Main>

      <BottomContent>
        <BottomTitle>Ações Estratégicas</BottomTitle>
        <ListContainer>
          <ProjectNewsItem
            first
            imgSrc=""
            imgAlt=""
            date={new Date()}
            resume="Lorem ipsum dolor sit amet, consectetuer adipiscing autem in vulputa velit esse eros et."
          />
          <ProjectNewsItem
            imgSrc=""
            imgAlt=""
            date={new Date()}
            resume="Lorem ipsum dolor sit amet, consectetuer adipiscing autem in vulputa velit esse eros et."
          />
          <ProjectNewsItem
            imgSrc=""
            imgAlt=""
            date={new Date()}
            resume="Lorem ipsum dolor sit amet, consectetuer adipiscing autem in vulputa velit esse eros et."
          />
          <ProjectNewsItem
            imgSrc=""
            imgAlt=""
            date={new Date()}
            resume="Lorem ipsum dolor sit amet, consectetuer adipiscing autem in vulputa velit esse eros et."
          />
          <ProjectNewsItem
            imgSrc=""
            imgAlt=""
            date={new Date()}
            resume="Lorem ipsum dolor sit amet, consectetuer adipiscing autem in vulputa velit esse eros et."
          />
          <ProjectNewsItem
            imgSrc=""
            imgAlt=""
            date={new Date()}
            resume="Lorem ipsum dolor sit amet, consectetuer adipiscing autem in vulputa velit esse eros et."
          />
          <ProjectNewsItem
            imgSrc=""
            imgAlt=""
            date={new Date()}
            resume="Lorem ipsum dolor sit amet, consectetuer adipiscing autem in vulputa velit esse eros et."
          />
        </ListContainer>
      </BottomContent>
    </Layout>
  </>
);

export default Project;
