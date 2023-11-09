// MiComponente.stories.tsx
import React from 'react';
import PleaseProvider from './PleaseProvider';

export default {
  title: 'PlayRoom/PleaseProvider',
  component: PleaseProvider,
} 


export const Default = () => <PleaseProvider title="Título de la Página" />;
