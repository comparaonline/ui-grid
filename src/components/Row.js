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

const Row = props => {
  const className = cx(
    `row${generateClassNames(props, propNames)}`,
    {
      'flex-row': props.equalHeightColumns,
      'v-gutters': props.addVerticalGutters
    },
    props.className
  );

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

Row.propTypes = generatePropTypes(propNames);
Row.defaultProps = {
  equalHeightColumns: false,
  addVerticalGutters: false
};

export default Row;
