import React from 'react';
import { shallow } from 'enzyme';
import Row, { propNames } from '../Row';
import { getBreakpointPropName } from '../utils';
import breakpoints from '../../config/breakpoints.json';
import { expectClass } from './helpers';

describe('Row', () => {
  it('renders a default row', () => {
    const row = shallow(<Row />);
    expectClass(row, 'row');
    expect(row.is('div')).toBe(true);
  });

  it('renders a row with numeric props', () => {
    Object.keys(breakpoints).forEach(bp => {
      propNames.breakpoints.numeric.forEach(prop => {
        const row = shallow(
          <Row {...{ [getBreakpointPropName(bp, prop)]: 1 }} />
        );
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
        const row = shallow(
          <Row {...{ [getBreakpointPropName(bp, prop)]: true }} />
        );
        expectClass(row, `${bp}-${prop}`);
      });
    });
  });

  it('renders a row with visibility props', () => {
    Object.keys(breakpoints).forEach(bp => {
      propNames.breakpoints.visibility.forEach(prop => {
        const row = shallow(
          <Row {...{ [getBreakpointPropName(bp, prop)]: true }} />
        );
        expectClass(row, `${prop}-for-${bp}`);
      });
    });
  });

  it('renders a row with equal height columns', () => {
    const row = shallow(<Row equalHeightColumns />);
    expectClass(row, 'flex-row');
  });

  describe('when an additional className is pass as prop', () => {
    const className = 'test-class';
    const wrapper = shallow(<Row className={className} />);

    it('add this className', () => {
      expect(wrapper.is(`.${className}`)).toBeTruthy();
    });
  });
});
