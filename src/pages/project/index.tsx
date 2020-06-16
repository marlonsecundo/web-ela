import React from 'react';

import {
  Main,
  TopLabel,
  BackButton,
  BackIcon,
  Title,
  Paragraph,
  Article,
} from './styles';
import AsideLayout from '~/components/aside-layout';
import { Subtitle } from '../care/styles';
import Layout from '~/components/layout';

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
        <TopLabel />
        <BackButton to="/projects">
          <BackIcon />
        </BackButton>

        <AsideLayout
          centerContent={(
            <Article>
              <Title>{location.state.title}</Title>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputa velit esse eros et. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea commodo consequat.
              </Paragraph>
              <Subtitle>
                Duis autem vel eum iriure dolor in hendrerit in
              </Subtitle>
              <Paragraph>
                vulputa velit esse eros et. Duis autem vel eum iriure dolor in
                hendrerit in vulputa velit esse eros et. Ut wisi enim ad minim
                veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                iriure dolor in hendrerit in vulputa velit esse eros et. Duis
                autem vel eum iriure dolor in hendrerit in vulputa velit esse
                eros et. Duis autem vel eum iriure dolor in hendrerit in vulputa
                velit esse eros et vel eum iriure dolor in hendrerit. Duis autem
                vel eum iriure dolor in hendrerit in vulputa velit esse eros et
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputa velit esse eros et. Duis autem vel eum iriure dolor in
                hendrerit in vulputa velit esse eros et. Duis autem vel eum
                iriure dolor in hendrerit in vulputa velit esse eros et vel eum
                iriure dolor in hendrerit.
              </Paragraph>
            </Article>
          )}
        />
      </Main>
    </Layout>
  </>
);

export default Project;
