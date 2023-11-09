import React, { FC } from 'react';
import Componente1 from './Componente1';
import Componente2 from './Componente2';
import Componente3 from './Componente3';

const ComponentePadre: FC = () => {
  return (
    <div>
      <Componente1 />
      <Componente2 />
      <Componente3 />
    </div>
  );
};

export default ComponentePadre;
