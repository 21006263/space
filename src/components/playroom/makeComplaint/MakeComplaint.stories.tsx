// MakeComplaint.stories.tsx
import React from 'react';
import MakeComplaint, { MakeComplaintProps } from './MakeComplaint'; // Asegúrate de tener la ruta correcta al componente

//import MakeComplaint from './MakeComplaint';

export default {
  title: 'PlayRoom/MakeComplaint',
  component: MakeComplaint,
};




// Historia básica
export const Basic = () => <MakeComplaint />;

// Historia con propiedades personalizadas
export const WithCustomProps = () => {
  const customProps: MakeComplaintProps = {
    buttonProps: {
      onClick: () => console.log("Custom button clicked!"),
    },
    selectProps: {
      placeholder: "Custom Placeholder",
    },
    textAreaProps: {
      placeholder: "Custom Text Area Placeholder",
    },
  };

  return <MakeComplaint {...customProps} />;
};
