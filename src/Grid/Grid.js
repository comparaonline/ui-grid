import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { removeProps, isDefined } from './utils';

/**
 * Row component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Row = (props) => {
  const className = classNames(
    props.noDefaultClassName ? null : 'row',
    props.className,
    isDefined(props.upOnSmall) ? `small-up-${props.upOnSmall}` : null,
    isDefined(props.upOnMedium) ? `medium-up-${props.upOnMedium}` : null,
    isDefined(props.upOnLarge) ? `large-up-${props.upOnLarge}` : null,
    isDefined(props.upOnXLarge) ? `xlarge-up-${props.upOnXLarge}` : null,
    isDefined(props.upOnXXLarge) ? `xxlarge-up-${props.upOnXXLarge}` : null,
    {
      'small-collapse': props.collapseOnSmall,
      'medium-collapse': props.collapseOnMedium,
      'large-collapse': props.collapseOnLarge,
      'xlarge-collapse': props.collapseOnXLarge,
      'xxlarge-collapse': props.collapseOnXXLarge,
      'small-uncollapse': props.uncollapseOnSmall,
      'medium-uncollapse': props.uncollapseOnMedium,
      'large-uncollapse': props.uncollapseOnLarge,
      'xlarge-uncollapse': props.uncollapseOnXLarge,
      'xxlarge-uncollapse': props.uncollapseOnXXLarge,
      'collapse': props.isCollapsed,
      'expanded': props.isExpanded,
      'column': props.isColumn
    }
  );

  const passProps = removeProps(props, Object.keys(Row.propTypes));

  return <div {...passProps} className={className}/>;
};

Row.propTypes = {
  upOnSmall: PropTypes.number,
  upOnMedium: PropTypes.number,
  upOnLarge: PropTypes.number,
  upOnXLarge: PropTypes.number,
  upOnXXLarge: PropTypes.number,
  collapseOnSmall: PropTypes.bool,
  collapseOnMedium: PropTypes.bool,
  collapseOnLarge: PropTypes.bool,
  collapseOnXLarge: PropTypes.bool,
  collapseOnXXLarge: PropTypes.bool,
  uncollapseOnSmall: PropTypes.bool,
  uncollapseOnMedium: PropTypes.bool,
  uncollapseOnLarge: PropTypes.bool,
  uncollapseOnXLarge: PropTypes.bool,
  uncollapseOnXXLarge: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isColumn: PropTypes.bool
};

/**
 * Column component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Column = (props) => {
  const defaultClassName = props.isColumn ? 'column' : 'columns';
  const className = classNames(
    props.noDefaultClassName ? null : defaultClassName,
    props.className,
    props.small ? `small-${props.small}` : null,
    props.medium ? `medium-${props.medium}` : null,
    props.large ? `large-${props.large}` : null,
    props.xlarge ? `xlarge-${props.xlarge}` : null,
    props.xxlarge ? `xxlarge-${props.xxlarge}` : null,
    isDefined(props.offsetOnSmall) ? `small-offset-${props.offsetOnSmall}` : null,
    isDefined(props.offsetOnMedium) ? `medium-offset-${props.offsetOnMedium}` : null,
    isDefined(props.offsetOnLarge) ? `large-offset-${props.offsetOnLarge}` : null,
    isDefined(props.offsetOnXLarge) ? `xlarge-offset-${props.offsetOnXLarge}` : null,
    isDefined(props.offsetOnXXLarge) ? `xxlarge-offset-${props.offsetOnXXLarge}` : null,
    isDefined(props.pushOnSmall) ? `small-push-${props.pushOnSmall}` : null,
    isDefined(props.pushOnMedium) ? `medium-push-${props.pushOnMedium}` : null,
    isDefined(props.pushOnLarge) ? `large-push-${props.pushOnLarge}` : null,
    isDefined(props.pushOnXLarge) ? `xlarge-push-${props.pushOnXLarge}` : null,
    isDefined(props.pushOnXXLarge) ? `xxlarge-push-${props.pushOnXXLarge}` : null,
    isDefined(props.pullOnSmall) ? `small-pull-${props.pullOnSmall}` : null,
    isDefined(props.pullOnMedium) ? `medium-pull-${props.pullOnMedium}` : null,
    isDefined(props.pullOnLarge) ? `large-pull-${props.pullOnLarge}` : null,
    isDefined(props.pullOnXLarge) ? `xlarge-pull-${props.pullOnXLarge}` : null,
    isDefined(props.pullOnXXLarge) ? `xxlarge-pull-${props.pullOnXXLarge}` : null,
    {
      'small-centered': props.centerOnSmall,
      'medium-centered': props.centerOnMedium,
      'large-centered': props.centerOnLarge,
      'xlarge-centered': props.centerOnXLarge,
      'xxlarge-centered': props.centerOnXXLarge,
      'small-uncentered': props.uncenterOnSmall,
      'medium-uncentered': props.uncenterOnMedium,
      'large-uncentered': props.uncenterOnLarge,
      'xlarge-uncentered': props.uncenterOnXLarge,
      'xxlarge-uncentered': props.uncenterOnXXLarge,
      'end': props.isLast
    }
  );

  const passProps = removeProps(props, Object.keys(Column.propTypes));

  return <div {...passProps} className={className}/>;
};

Column.propTypes = {
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  offsetOnSmall: PropTypes.number,
  offsetOnMedium: PropTypes.number,
  offsetOnLarge: PropTypes.number,
  offsetOnXLarge: PropTypes.number,
  offsetOnXXLarge: PropTypes.number,
  pushOnSmall: PropTypes.number,
  pushOnMedium: PropTypes.number,
  pushOnLarge: PropTypes.number,
  pushOnXLarge: PropTypes.number,
  pushOnXXLarge: PropTypes.number,
  pullOnSmall: PropTypes.number,
  pullOnMedium: PropTypes.number,
  pullOnLarge: PropTypes.number,
  pullOnXLarge: PropTypes.number,
  pullOnXXLarge: PropTypes.number,
  centerOnSmall: PropTypes.bool,
  centerOnMedium: PropTypes.bool,
  centerOnLarge: PropTypes.bool,
  centerOnXLarge: PropTypes.bool,
  centerOnXXLarge: PropTypes.bool,
  uncenterOnSmall: PropTypes.bool,
  uncenterOnMedium: PropTypes.bool,
  uncenterOnLarge: PropTypes.bool,
  uncenterOnXLarge: PropTypes.bool,
  uncenterOnXXLarge: PropTypes.bool,
  isLast: PropTypes.bool
};