import React, { FC } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import HeaderPlayRoom from './header/HeaderPlayRoom';
import MakeComplaint from './makeComplaint/MakeComplaint';
import PleaseProvider from './pleaseProvider/PleaseProvider';
import PleaseProvideDetails from './pleaseProvideDetails/PleaseProvideDetails';
import Footer from './footer/Footer';

const PlayroomMain: FC = () => {
  return (
  
      <Container>
        <HeaderPlayRoom />
        <Divider hidden />
        <MakeComplaint />
        <Divider hidden />
        <PleaseProvider />
        <Divider hidden />
        <PleaseProvideDetails />
        <Divider hidden />
        <Footer />
      </Container>

  );
};

export default PlayroomMain;

