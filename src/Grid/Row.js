import React from 'react';
import { generateClassNames, generatePropTypes } from './utils';

export const propNames = {
  breakpoints: {
    include: false,
    numeric: ['up', 'collapse', 'uncollapse']
  },
  boolean: ['collapse', 'expanded']
};

export const Row = (props) => {
  const className = generateClassNames(props, propNames);
  return <div className={`row${className}`}>{props.children}</div>;
};

Row.propTypes = generatePropTypes(propNames);
