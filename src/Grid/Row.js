import React from 'react';
import cx from 'classnames';
import { generateClassNames, generatePropTypes } from './utils';

export const propNames = {
  breakpoints: {
    include: false,
    numeric: ['up'],
    boolean: ['collapse', 'uncollapse']
  },
  boolean: ['collapse', 'expanded']
};

export const Row = (props) => {
  const className = cx(
    `row${generateClassNames(props, propNames)}`,
    props.className
  );

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

Row.propTypes = generatePropTypes(propNames);
