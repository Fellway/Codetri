import React from 'react';
import StoryRouter from 'storybook-react-router';
import SidebarComponent from './Sidebar';

export default {
  title: 'Components/organisms',
  component: SidebarComponent,
  decorators: [StoryRouter()],
};

export const Sidebar = () => <SidebarComponent />;
