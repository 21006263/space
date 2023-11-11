// MakeComplaint.stories.tsx
import React from 'react';
import { action } from '@storybook/addon-actions';
import MakeComplaint from './MakeComplaint';

export default {
  title: 'PlayRoom/MakeComplaint',
  component: MakeComplaint,
};

const Template = (args) => <MakeComplaint {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithYesButtonClick = Template.bind({});
WithYesButtonClick.args = {
  onYesButtonClick: action('Yes button clicked'),
};

export const WithNoButtonClick = Template.bind({});
WithNoButtonClick.args = {
  onNoButtonClick: action('No button clicked'),
};

export const WithSelectChange = Template.bind({});
WithSelectChange.args = {
  onSelectChange: action('Select changed'),
};

export const WithTextAreaChange = Template.bind({});
WithTextAreaChange.args = {
  onTextAreaChange: action('TextArea changed'),
};
