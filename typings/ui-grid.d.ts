import * as React from 'react';

type VisibilityProps = {
  showOnSmall?: boolean;
  showOnMedium?: boolean;
  showOnLarge?: boolean;
  showOnXlarge?: boolean;
  showOnXxlarge?: boolean;

  hideOnSmall?: boolean;
  hideOnMedium?: boolean;
  hideOnLarge?: boolean;
  hideOnXlarge?: boolean;
  hideOnXxlarge?: boolean;
};

type RowProps = {
  collapse?: boolean;
  expanded?: boolean;
  equalHeightColumns?: boolean;
  addVerticalGutters?: boolean;
  collapseOnSmall?: boolean;
  collapseOnMedium?: boolean;
  collapseOnLarge?: boolean;
  collapseOnXlarge?: boolean;
  collapseOnXxlarge?: boolean;
  unCollapseOnSmall?: boolean;
  unCollapseOnMedium?: boolean;
  unCollapseOnLarge?: boolean;
  unCollapseOnXlarge?: boolean;
  unCollapseOnXxlarge?: boolean;
};

type ColumnsWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ColumnProps = {
  small?: ColumnsWidth;
  medium?: ColumnsWidth;
  large?: ColumnsWidth;
  xlarge?: ColumnsWidth;
  xxlarge?: ColumnsWidth;

  offsetOnSmall?: boolean;
  offsetOnMedium?: boolean;
  offsetOnLarge?: boolean;
  offsetOnXlarge?: boolean;
  offsetOnXxlarge?: boolean;

  pushOnSmall?: boolean;
  pushOnMedium?: boolean;
  pushOnLarge?: boolean;
  pushOnXlarge?: boolean;
  pushOnXxlarge?: boolean;

  pullOnSmall?: boolean;
  pullOnMedium?: boolean;
  pullOnLarge?: boolean;
  pullOnXlarge?: boolean;
  pullOnXxlarge?: boolean;

  centerOnSmall?: boolean;
  centerOnMedium?: boolean;
  centerOnLarge?: boolean;
  centerOnXlarge?: boolean;
  centerOnXxlarge?: boolean;

  uncenterOnSmall?: boolean;
  uncenterOnMedium?: boolean;
  uncenterOnLarge?: boolean;
  uncenterOnXlarge?: boolean;
  uncenterOnXxlarge?: boolean;
};

export class Row extends React.Component<RowProps | VisibilityProps> {}
export class Column extends React.Component<ColumnProps | VisibilityProps> {}
