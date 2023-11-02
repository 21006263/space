/* eslint-disable quotes */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CompleteComponent } from './CompleteComponent';

export default {
  title: 'Example/CompleteComponent',
  component: CompleteComponent,
} as Meta;

const Template: Story.CompleteComponentProps = (args) => <CompleteComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerText: 'Header',
  contentText: 'Content',
  footerText: 'Footer',
  textAreaValue: 'Text Area',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
};
