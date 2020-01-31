import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import '../pages/App/App.scss';
import App from '../pages/App/App';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

export const AppStory = () => <App />

ToStorybook.story = {
  name: 'to Storybook',
};
