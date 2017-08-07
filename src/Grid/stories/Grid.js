import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Row from '../Row';
import Column from '../Column';
import '../grid.scss';
import './helper.scss';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addWithInfo(
    'basic',
    '...',
    () => (
      <Row>
        <Column small={2} medium={3} large={4}>Column</Column>
        <Column small={4} medium={3} large={4}>Column</Column>
        <Column small={6} medium={3} large={4}>Column</Column>
      </Row>
    )
  );
