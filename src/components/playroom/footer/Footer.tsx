import React, { useState } from 'react';
import { Container, Divider, List, Segment, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const handleModalOpen = (title: string) => {
    // Define el contenido del modal según el título del enlace
    setModalContent({
      title,
      content: `This is the content for ${title}. You can customize it further.`,
    });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const links = [
    { name: 'Accessibility', onClick: () => handleLinkClick('Accessibility') },
    { name: 'Copyright', onClick: () => handleLinkClick('Copyright') },
    { name: 'Disclaimer', onClick: () => handleLinkClick('Disclaimer') },
    { name: 'Privacy', onClick: () => handleLinkClick('Privacy') },
    { name: 'Content sources', onClick: () => handleLinkClick('Content sources') },
    { name: 'RSS', onClick: () => handleLinkClick('RSS') },
    { name: 'Contact us', onClick: () => handleLinkClick('Contact us') },
  ];

  const handleLinkClick = (name: string) => {
    handleModalOpen(name);
  };

  const StyledModal = styled(Modal)`
    .ui.page.modals.dimmer.transition.visible.active {
      background-color: red !important;
      color: #22272B !important;
    }
  `;

  return (
    <Segment clearing inverted vertical style={{ padding: '4em 10%', backgroundColor: '#22272B', fontFamily: 'Public Sans', fontSize: '12px', fontWeight: 400, lineHeight: '18px', letterSpacing: '0px', textAlign: 'left' }}>
      <Container>
        <p style={{ color: '#FFFFFF' }}>
          We pay respect to the Traditional Custodians and First Peoples of NSW, and acknowledge their continued connection to their country and culture.
        </p>
        <Divider inverted clearing />
        <List selection horizontal divided link size='small'>
          {links.map((link) => (
            <List.Item as='a' key={link.name} onClick={link.onClick} style={{ marginRight: '10px', color: '#FFFFFF', borderBottom: '1px solid #CDD3D6', paddingBottom: '5px', cursor: 'pointer' }}>{link.name}</List.Item>
          ))}
        </List>
        <p style={{ color: '#FFFFFF', marginBottom: '5px', marginTop: '1em' }}>Copyright © 2019</p>
      </Container>

      <StyledModal closeOnTriggerMouseLeave closeOnDimmerClick open={modalOpen} onClose={handleModalClose}>
        <Modal.Header style={{ textAlign: 'center', color: '#22272B' }}>{modalContent.title}</Modal.Header>
        <Modal.Content>
          <p>{modalContent.content}</p>
        </Modal.Content>
        <Modal.Actions>
          <button onClick={handleModalClose} style={{ backgroundColor: '#275D3A', color: '#FFFFFF', border: 'none', padding: '10px 20px' }}>Close</button>
        </Modal.Actions>
      </StyledModal>
    </Segment>
  );
}

export default Footer;



