import PropTypes from 'prop-types';
import breakpoints from '../breakpoints.json';

const bps = Object.keys(breakpoints);
const bpCamelCase = bp => `${bp.substr(0, 1).toUpperCase()}${bp.substr(1)}`;

export const bpPropClass = (bp, prop) => `${prop}On${bpCamelCase(bp)}`;

const getBooleanClassNames = (props, booleanProps) => booleanProps.reduce(
  (names, prop) => names.concat(props[prop] ? ` ${prop}` : ''), '');

const getBreakpointClassName = (props, bp) => (props[bp] ? ` ${bp}-${props[bp]}` : '');

const getBreakpointNumericClassName = (props, numericProps, bp) => numericProps.reduce(
  (names, prop) => {
    const propValue = props[bpPropClass(bp, prop)];
    return names.concat(propValue ? ` ${bp}-${prop}-${propValue}` : '');
  }, '');

const getBreakpointBooleanClassName = (props, booleanProps, bp) => booleanProps.reduce(
  (names, prop) => names.concat(props[bpPropClass(bp, prop)] ? ` ${bp}-${prop}` : ''), '');

const getBreakpointVisibilityClassName = (props, booleanProps, bp) => booleanProps.reduce(
  (names, prop) => names.concat(props[bpPropClass(bp, prop)] ? ` ${prop}-for-${bp}` : ''), '');

const generateBreakpointClassNames = (props, propNames, bp) => ''.concat(
  propNames.include ? getBreakpointClassName(props, bp) : '',
  propNames.numeric ? getBreakpointNumericClassName(props, propNames.numeric, bp) : '',
  propNames.boolean ? getBreakpointBooleanClassName(props, propNames.boolean, bp) : '',
  propNames.visibility ? getBreakpointVisibilityClassName(props, propNames.visibility, bp) : ''
);

/**
 * Generate string with classnames from props names and breakpoints
 *
 * @param {Object} props
 * @param {String Array} numericProps
 * @param {String Array} booleanProps
 * @param {Boolean} hasBreakpoint
 * @returns {String}
 */
export const generateClassNames = (props, propNames) => ''.concat(
  propNames.boolean ? getBooleanClassNames(props, propNames.boolean) : '',
  propNames.breakpoints ?
    bps.reduce((className, bp) => className.concat(
      generateBreakpointClassNames(props, propNames.breakpoints, bp)
    ), '') : ''
);

const getBooleanTypes = booleanProps => booleanProps.reduce(
  (result, prop) => Object.assign(result, { [prop]: PropTypes.bool }), {});

const getBreakpointType = bp => ({ [bp]: PropTypes.number });

const getBreakpointGenericType = (props, bp, type) => props.reduce(
  (result, prop) => Object.assign(result, { [bpPropClass(bp, prop)]: type }), {});

const generateBreakpointTypes = (propNames, bp) => Object.assign(
  propNames.include ? getBreakpointType(bp) : {},
  propNames.numeric ? getBreakpointGenericType(propNames.numeric, bp, PropTypes.number) : {},
  propNames.boolean ? getBreakpointGenericType(propNames.boolean, bp, PropTypes.bool) : {},
  propNames.visibility ? getBreakpointGenericType(propNames.visibility, bp, PropTypes.bool) : {}
);

/**
 * Generate object with prop types from props names and breakpoints
 *
 * @param {String Array} numericProps
 * @param {String Array} booleanProps
 * @param {Boolean} hasBreakpoint
 * @returns {Object}
 */
export const generatePropTypes = (propNames) =>
  Object.assign(
    propNames.boolean ? getBooleanTypes(propNames.boolean) : {},
    bps.reduce((result, bp) => Object.assign(
      result,
      generateBreakpointTypes(propNames.breakpoints, bp)
    ), {})
  );
