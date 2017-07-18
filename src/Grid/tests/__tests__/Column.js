import React from 'react';
import { shallow } from 'enzyme';
import { Column, numericProps, booleanProps } from '../../Column';
import { bpPropClass } from '../../utils';
import breakpoints from '../../../breakpoints.json';
import { expectClass } from '../helper';

const bps = Object.keys(breakpoints);

describe('Column', () => {
  it('renders a column', () => {
    const column = shallow(<Column />);
    expectClass(column, 'column');
    expect(column.is('div')).toBe(true);
  });

  it('renders a column with breakpoints', () => {
    bps.forEach(bp => {
      const column = shallow(<Column {...{ [bp]: 1 }} />);
      expectClass(column, `${bp}-1`);
    });
  });

  it('renders a column with numeric props', () => {
    bps.forEach(bp => {
      numericProps.forEach(prop => {
        const column = shallow(<Column {...{ [bpPropClass(bp, prop)]: 1 }} />);
        expectClass(column, `${bp}-${prop}-1`);
      });
    });
  });

  it('renders a column with boolean props', () => {
    bps.forEach(bp => {
      booleanProps.forEach(prop => {
        const column = shallow(<Column {...{ [bpPropClass(bp, prop)]: true }} />);
        expectClass(column, `${bp}-${prop}`);
      });
    });
  });
});
