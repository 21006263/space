// MiComponente.stories.tsx
import React from 'react';
import PlayroomMain from './PlayroomMain';

export default {
  title: 'PlayRoom/PlayroomMain',
  component: PlayroomMain,
} 

const Template = (args) => <PlayroomMain {...args} />;

export const PlayroomMainComponent = Template.bind({});
PlayroomMainComponent.args = {
  prop1: 'valor1',
  prop2: 'valor2',
};


