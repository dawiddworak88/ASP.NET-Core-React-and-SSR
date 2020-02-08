import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import '../pages/HomePage/HomePage.scss';
import HomePage from '../pages/HomePage/HomePage';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

export const HomePageStory = () => <HomePage welcome="Welcome from Storybook" learnMore="Learn more!" />

ToStorybook.story = {
  name: 'to Storybook',
};
