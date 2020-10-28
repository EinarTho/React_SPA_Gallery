import React from 'react';
import Log from '../Log';

import { LogWrapper } from './style';

const LogContainer = () => (
  <LogWrapper>
    <ul>
      <Log />
      <Log />
      <Log />
      <Log />
      <Log />
      <Log />
    </ul>
  </LogWrapper>
);

export default LogContainer;
