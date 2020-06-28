import scrollView from 'scroll-into-view';

import React, { useRef, useEffect } from 'react';

import {
  Container,
  Img,
  DateText,
  Resume,
  Button,
  Line,
  SeparatorContainer,
  Circle,
} from './styles';

interface Props {
  date: Date;
  resume: string;
  imgSrc: string;
  imgAlt: string;
  first?: boolean;
}

const ProjectNewsItem: React.FC<Props> = ({
  imgSrc,
  imgAlt,
  date,
  resume,
  first,
}) => {
  const element = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (first) {
      scrollView(element!.current!, {
        align: {
          top: 0,
          left: 0,
        },
      });
    }
  }, [element]);

  return (
    <Container ref={element}>
      <Img src={imgSrc} alt={imgAlt} />
      <SeparatorContainer>
        <Circle />
        <Line />
      </SeparatorContainer>
      <DateText>{`${date.getDay()} de ${date.getMonth()} | ${date.getFullYear()}`}</DateText>
      <Resume>
        Lorem ipsum dolor sit amet, consectetuer adipiscing autem in
        vulputa velit esse eros et.
        {resume}
      </Resume>
      <Button>Saiba Mais</Button>
    </Container>
  );
};

export default ProjectNewsItem;
