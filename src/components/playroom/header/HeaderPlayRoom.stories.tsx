import React from 'react';
import { action } from '@storybook/addon-actions';
import HeaderPlayRoom from './HeaderPlayRoom';
import Logo from '../assets/design-system.png'

export default {
  title: 'PlayRoom/Header',
  component: HeaderPlayRoom,
};

const Template = (args) => <HeaderPlayRoom {...args} />;

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {
  title: 'Título de la Página',
};

export const LogoDirente = Template.bind({});
LogoDirente.args = {
  title: 'Título de la Página',
  logo: Logo,
};

export const WithCustomColorScheme = Template.bind({});
WithCustomColorScheme.args = {
  title: 'Título de la Página',
  colorScheme: '#FF5733', // Cambia el color según tu preferencia
};

export const WithTextAndClickEvent = Template.bind({});
WithTextAndClickEvent.args = {
  title: 'Título de la Página',
  text: '¡Bienvenido!',
  onClick: action('¡Welcome!'),
};

