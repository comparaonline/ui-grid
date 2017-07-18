import React from 'react';
import { generateClassnames, generatePropTypes } from './utils';

export const numericProps = ['up', 'collapse', 'uncollapse'];
export const booleanProps = ['collapse', 'expanded'];

export const Row = (props) => {
  const className = generateClassnames(props, numericProps, booleanProps);
  return <div {...props} className={`row${className}`} />;
};

Row.propTypes = generatePropTypes(numericProps, booleanProps);
