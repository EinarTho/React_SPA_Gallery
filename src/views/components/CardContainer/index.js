import React from 'react';
import Card from '../Card';
import { CardContainerWrapper } from './style';

const CardContainer = () => (
  <CardContainerWrapper>
    <h1>Im the CardContainer</h1>
    <div>
      <Card />
      <Card />
      <Card />
    </div>
  </CardContainerWrapper>
);

export default CardContainer;
