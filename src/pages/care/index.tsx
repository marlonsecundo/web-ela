import React from 'react';

import {
  Main,
  BottomContent,
  BottomTitle,
  CardContainer,
  Article,
} from './styles';
import Layout from '~/components/layout';
import TopTitle from '~/components/toptitle';
import CareCardItem from '~/components/carecarditem';
import Subtitle from '~/components/subtitle';
import AsideLayout from '~/components/aside-layout';
import Paragraph from '~/components/paragraph';

import imgAcompanhamento from '~/images/care/acompanhamento-multidisciplinar.png';
import imgCartilha from '~/images/care/cartilha.png';
import imgCurso from '~/images/care/curso-do-avasus.png';
import imgGuias from '~/images/care/guias.png';
import imgOficina from '~/images/care/oficina-de-cuidadores.png';

const care: React.FC = () => (
  <>
    <Layout backcolor>
      <TopTitle label="Home | Cuidados" title="Cuidados com o paciente" />
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
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputa velit esse eros et.
              </Paragraph>
              <Subtitle>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper tation ullamcorper
              </Subtitle>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputa velit esse eros et.
              </Paragraph>
              <Subtitle>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper tation ullamcorper
              </Subtitle>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputa velit esse eros et.
              </Paragraph>
            </Article>
          )}
        />
      </Main>
      <BottomContent>
        <BottomTitle>Ações Estratégicas</BottomTitle>
        <CardContainer>
          <CareCardItem
            imgSrc={imgAcompanhamento}
            imgAlt="Pessoas Acompanhadas"
            title="Acompanhamento Multidiciplinar"
          />
          <CareCardItem
            imgSrc={imgCurso}
            imgAlt="Pessoa com uma guia atrás"
            title="Guias"
          />
          <CareCardItem
            imgSrc={imgGuias}
            imgAlt="Pessoa com uma guia atrás"
            title="Guias"
          />
          <CareCardItem
            imgSrc={imgCartilha}
            imgAlt="Pessoa com uma dois arquivos atrás"
            title="Cartilha"
          />
          <CareCardItem
            imgSrc={imgOficina}
            imgAlt="Mãos levantadas com punho fechado e um lápis na mão"
            title="Oficina de Cuidadores"
          />
        </CardContainer>
      </BottomContent>
    </Layout>
  </>
);

export default care;
