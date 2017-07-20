import React from 'react';
import { generateClassNames, generatePropTypes } from './utils';

export const propNames = {
  breakpoints: {
    include: true,
    numeric: ['pull', 'push', 'offset'],
    boolean: ['centered', 'uncentered']
  }
};

export const Column = (props) => {
  const className = generateClassNames(props, propNames);
  return <div {...props} className={`column${className}`} />;
};

Column.propTypes = generatePropTypes(propNames);
