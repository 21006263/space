import React from 'react';
import { Container, Divider, List, Segment } from 'semantic-ui-react';

const Footer: React.FC = () => {
    return (
        <Segment clearing inverted vertical style={{ padding: '4em 10%', backgroundColor: '#22272B', fontFamily: 'Public Sans', fontSize: '12px', fontWeight: 400, lineHeight: '18px', letterSpacing: '0px', textAlign: 'left' }}>
            <Container >
                <p style={{ color: '#FFFFFF' }}>
                    We pay respect to the Traditional Custodians and First Peoples of NSW, and acknowledge their continued connection to their country and culture.
                </p>
                <Divider inverted clearing/>
                <List selection horizontal  divided link size='small' >
                    <List.Item as='a' href='#' style={{ marginRight: '10px', color: '#FFFFFF', borderBottom: '1px solid #CDD3D6', paddingBottom: '5px' }}>Accessibility</List.Item>
                    <List.Item as='a' href='#' style={{marginRight: '10px', color: '#FFFFFF', borderBottom: '1px solid #CDD3D6', paddingBottom: '5px' }}>Copyright</List.Item>
                    <List.Item as='a' href='#' style={{ marginRight: '10px',color: '#FFFFFF', borderBottom: '1px solid #CDD3D6', paddingBottom: '5px' }}>Disclaimer</List.Item>
                    <List.Item as='a' href='#' style={{ marginRight: '10px',color: '#FFFFFF', borderBottom: '1px solid #CDD3D6', paddingBottom: '5px' }}>Privacy</List.Item>
                    <List.Item as='a' href='#' style={{ marginRight: '10px',color: '#FFFFFF', borderBottom: '1px solid #CDD3D6', paddingBottom: '5px' }}>Content sources</List.Item>
                    <List.Item as='a' href='#' style={{ marginRight: '10px',color: '#FFFFFF', borderBottom: '1px solid #CDD3D6', paddingBottom: '5px' }}>RSS</List.Item>
                    <List.Item as='a' href='#' style={{ marginRight: '10px',color: '#FFFFFF', borderBottom: '1px solid #CDD3D6', paddingBottom: '5px' }}>Contact us</List.Item>
                </List>
                <p style={{ color: '#FFFFFF', marginBottom: '5px', marginTop: '1em'}}>Copyright © 2019</p>
            </Container>
        </Segment>
    );
}

export default Footer;





