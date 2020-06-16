import React from 'react';

import {
  Main,
  ListContainer,
  ListItem,
  BodyInfo,
  Diagram,
  Article,
} from './styles';
import Layout from '~/components/layout';
import AsideLayout from '~/components/aside-layout';
import Paragraph from '~/components/paragraph';
import Subtitle from '~/components/subtitle';

import TopTitle from '~/components/toptitle';

const about: React.FC = () => (
  <>
    <Layout backcolor>
      <TopTitle
        label="Home | Sobre ELA"
        title="Sobre Esclerose Lateral Amiotrofica"
      />
      <Main>
        <AsideLayout
          centerContent={(
            <Article>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputa velit esse eros et.
              </Paragraph>
              <ListContainer>
                <ListItem>
                  1- Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit;
                </ListItem>
                <ListItem>
                  2- Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorpe;
                </ListItem>
                <ListItem>
                  3- Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit.
                </ListItem>
              </ListContainer>
              <Subtitle>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper tation ullamcorper
              </Subtitle>
              <Paragraph>
                Suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
                autem vel eum iriure dolor in hendrerit in vulputa velit esse
                eros et. Duis autem vel eum iriure dolor in hendrerit in vulputa
                velit esse eros et. Duis autem vel eum iriure dolor in hendrerit
                in vulputa velit esse eros et vel eum iriure dolor in hendrerit.
                Ut wisi enim ad minim veniam, quis nostrud exerci
              </Paragraph>
              <Subtitle>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper tation ullamcorper
              </Subtitle>
              <BodyInfo />
              <Paragraph>
                Desenvolvimento de pesquisas e estudos voltados para o
                desenvolvimento de tecnologias e inovações para tratamento,
                monitoramento e definição de protocolos para doenças do neurônio
                motor, com especial atenção para a Esclerose Lateral
                Amiotrófica. Desenvolvimento de pesquisas e estudos voltados
                para o desenvolvimento de tecnologias e inovações para
                tratamento, monitoramento e definição de protocolos para doenças
                do neurônio motor, com especial atenção para a Esclerose Lateral
                Amiotrófica.
              </Paragraph>
              <Diagram />
            </Article>
          )}
          asideContent={<div />}
        />
      </Main>
    </Layout>
  </>
);

export default about;
