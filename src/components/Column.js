import React from 'react';
import cx from 'classnames';
import { generateClassNames, generatePropTypes } from './utils';

export const propNames = {
  breakpoints: {
    include: true,
    numeric: ['pull', 'push', 'offset'],
    boolean: ['centered', 'uncentered'],
    visibility: ['hide', 'show']
  }
};

const Column = ({ id = null, ...props }) => {
  const className = cx(
    props.className,
    `column${generateClassNames(props, propNames)}`
  );

  const attrs = {
    className,
    ...(id && { id })
  };

  return <div {...attrs}>{props.children}</div>;
};

Column.propTypes = generatePropTypes(propNames);

export default Column;
