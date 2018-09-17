import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
// import { Button, Welcome } from '@storybook/react/demo';
import Header from './Header'
import Button from './Button'

const sampleProps = {
  text: 'sample test'
}

storiesOf('Header', module)
  .addDecorator(story => <div>
    <div style={{ backgroundColor: 'lightblue' }}>Above</div>
    {story()}
    <div style={{ backgroundColor: 'lightblue' }}>Below</div>
  </div>
  )
  .add('with text', () => <Header {...sampleProps} />)
  .add('with Button', () => <Button {...sampleProps} />)

