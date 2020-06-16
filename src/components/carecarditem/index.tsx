import React from 'react';

import { CardImage, CardTitle, Content } from './styles';

interface Props {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const CareCardItem: React.FC<Props> = ({ imgSrc, imgAlt, title }) => (
  <Content>
    <CardImage src={imgSrc} alt={imgAlt} />
    <CardTitle>{title}</CardTitle>
  </Content>
);

export default CareCardItem;
