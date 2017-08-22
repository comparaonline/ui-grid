import React from 'react';
import { shallow } from 'enzyme';
import Column, { propNames } from '../../Column';
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
      propNames.breakpoints.numeric.forEach(prop => {
        const column = shallow(<Column {...{ [bpPropClass(bp, prop)]: 1 }} />);
        expectClass(column, `${bp}-${prop}-1`);
      });
    });
  });

  it('renders a column with boolean props', () => {
    bps.forEach(bp => {
      propNames.breakpoints.boolean.forEach(prop => {
        const column = shallow(<Column {...{ [bpPropClass(bp, prop)]: true }} />);
        expectClass(column, `${bp}-${prop}`);
      });
    });
  });

  it('renders a row with visibility props', () => {
    Object.keys(breakpoints).forEach(bp => {
      propNames.breakpoints.visibility.forEach(prop => {
        const row = shallow(<Column {...{ [bpPropClass(bp, prop)]: true }} />);
        expectClass(row, `${prop}-for-${bp}`);
      });
    });
  });

  describe('when an additional className is pass as prop', () => {
    const className = 'test-class';
    const wrapper = shallow(<Column className={className} />);

    it('add this className', () => {
      expect(wrapper.is(`.${className}`)).toBeTruthy();
    });
  });
});
