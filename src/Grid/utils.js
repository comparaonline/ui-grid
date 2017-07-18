import PropTypes from 'prop-types';
import breakpoints from '../breakpoints.json';

const bps = Object.keys(breakpoints);
export const bpPropClass = (bp, prop) => `${prop}On${bp.substr(0, 1).toUpperCase() + bp.substr(1)}`;

/**
 * Generate string with classnames from props names and breakpoints
 *
 * @param {Object} props
 * @param {String Array} numericProps
 * @param {String Array} booleanProps
 * @param {Boolean} hasBreakpoint
 * @returns {String}
 */
export const generateClassnames = (props, numericProps, booleanProps, hasBreakpoint = false) =>
  bps.reduce((result, bp) => result.concat(
    hasBreakpoint && props[bp] ? ` ${bp}-${props[bp]}` : '',
    numericProps.reduce((names, prop) => {
      const propValue = props[bpPropClass(bp, prop)];
      return names.concat(propValue ? ` ${bp}-${prop}-${propValue}` : '');
    }, ''),
    booleanProps.reduce((names, prop) => names.concat(props[hasBreakpoint ? bpPropClass(bp, prop) : prop] ? ` ${hasBreakpoint ? `${bp}-` : ''}${prop}` : ''), ''),
  ), '');

/**
 * Generate object with prop types from props names and breakpoints
 *
 * @param {String Array} numericProps
 * @param {String Array} booleanProps
 * @param {Boolean} hasBreakpoint
 * @returns {Object}
 */
export const generatePropTypes = (numericProps, booleanProps, hasBreakpoint = false) =>
  bps.reduce((result, bp) => Object.assign(result, {
    ...hasBreakpoint && { [bp]: PropTypes.number },
    ...numericProps.reduce((names, prop) => Object.assign(names, {
      [bpPropClass(bp, prop)]: PropTypes.number
    }), {}),
    ...booleanProps.reduce((names, prop) => Object.assign(names, {
      [hasBreakpoint ? bpPropClass(bp, prop) : prop]: PropTypes.bool
    }), {})
  }), {});
