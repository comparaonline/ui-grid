import React from 'react';
import cx from 'classnames';
import { generateClassNames, generatePropTypes } from './utils';

export const propNames = {
  breakpoints: {
    include: false,
    numeric: ['up'],
    boolean: ['collapse', 'uncollapse'],
    visibility: ['hide', 'show']
  },
  boolean: ['collapse', 'expanded']
};

const Row = (props) => {
  const className = cx(
    `row${generateClassNames(props, propNames)}`,
    { 'flex-row': props.equalHeightColumns },
    props.className
  );

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

Row.propTypes = generatePropTypes(propNames);

export default Row;
