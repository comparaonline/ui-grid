import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setOptions({ name: 'ui-grid' });

// set addons that can't be registered using the ./addons.js file
setAddon(infoAddon);

const req = require.context('../src', true, /.+\/stories\/.+\.js$/);
const loadStories = () => req.keys().forEach(req);

configure(loadStories, module);
