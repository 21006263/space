import React from 'react';
import { loadFontsForStorybook } from '../src/utils/index';
import { GlobalStyle } from '../src/components/shared/global';

import type { Preview } from '@storybook/react';

loadFontsForStorybook();

const withGlobalStyle = (storyFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

const preview: Preview = {
  parameters: {
    // Configuración de Storybook
    actions: { argTypesRegex: '^on.*' },
    dependencies: {
      withStoriesOnly: true,
      hideEmpty: true,
    },
    // Configuración de Playroom
    playroom: {
      url: 'http://localhost:9000',
    },
  },
  decorators: [withGlobalStyle],
};

export default preview;

export const parameters = {
  previewTabs: {
    'storybook/playroom/panel': {
      hidden: true,
    },
  },
};
