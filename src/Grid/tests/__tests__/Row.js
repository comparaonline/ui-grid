import React from 'react';
import { shallow } from 'enzyme';
import { Row, propNames } from '../../Row';
import { bpPropClass } from '../../utils';
import breakpoints from '../../../breakpoints.json';
import { expectClass } from '../helper';

describe('Row', () => {
  it('renders a default row', () => {
    const row = shallow(<Row />);
    expectClass(row, 'row');
    expect(row.is('div')).toBe(true);
  });

  it('renders a row with numeric props', () => {
    Object.keys(breakpoints).forEach(bp => {
      propNames.breakpoints.numeric.forEach(prop => {
        const row = shallow(<Row {...{ [bpPropClass(bp, prop)]: 1 }} />);
        expectClass(row, `${bp}-${prop}-1`);
      });
    });
  });

  it('renders a row with boolean props', () => {
    propNames.boolean.forEach(prop => {
      const row = shallow(<Row {...{ [prop]: true }} />);
      expectClass(row, prop);
    });
  });

  it('renders a row with breakpoints boolean props', () => {
    Object.keys(breakpoints).forEach(bp => {
      propNames.breakpoints.boolean.forEach(prop => {
        const row = shallow(<Row {...{ [bpPropClass(bp, prop)]: true }} />);
        expectClass(row, `${bp}-${prop}`);
      });
    });
  });
});
