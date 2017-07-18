import React from 'react';
import { generateClassnames, generatePropTypes } from './utils';

export const numericProps = ['pull', 'push', 'offset'];
export const booleanProps = ['centered', 'uncentered'];

export const Column = (props) => {
  const className = generateClassnames(props, numericProps, booleanProps, true);
  return <div {...props} className={`column${className}`} />;
};

Column.propTypes = generatePropTypes(numericProps, booleanProps, true);
