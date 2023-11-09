/* eslint-disable quotes */
import React from 'react';
import { CompleteComponent } from './CompleteComponent';

export default {
  title: 'PlayRoom/CompleteComponent',
  component: CompleteComponent,
}

const Template: CompleteComponentProps = (args) => <CompleteComponent {...args} />;

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
