import React, { useState } from 'react';
import { Button, Form, TextArea, Divider, Grid, Label, Radio, Modal, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

interface Option {
  key: string;
  text: string;
  value: string;
}

interface PleaseProvideDetailsProps {
  providerName?: string;
  stateTerritory?: string;
  complaintDetails?: string;
  spokenToProvider?: 'yes' | 'no' | undefined;
  onInputChange?: (inputName: string, value: string) => void;
  onRadioChange?: (radioName: string, value: 'yes' | 'no') => void;
  mainTitle?: string;
  subTitle?: string;
}

const options: Option[] = [
  { key: 'Restrictive practice', text: 'Restrictive practice', value: 'Restrictive practice' },
  { key: 'Non-restrictive practice', text: 'Non-restrictive practice', value: 'Non-restrictive practice' },
  { key: 'Other', text: 'Other', value: 'Other' },
];

const StyledSelect = styled(Form.Select)`
  i.chevron.down.icon {
    margin: 0 22em;
  }
`;

const StyledTextArea = styled(TextArea)`
  &&& {
    min-height: 100px;
  }
`;

const StyledRadio = styled(Radio)`
  &.ui.radio.checkbox label {
    cursor: pointer;
    padding-left: 15px;
    margin: 15px;
    padding: 0 24px;
  }
`;

const PleaseProvideDetails: React.FC<PleaseProvideDetailsProps> = ({
  providerName = '',
  stateTerritory = '',
  complaintDetails = '',
  spokenToProvider,
  onInputChange,
  onRadioChange,
  mainTitle = 'Please provide details of this NDIS provider?',
  subTitle = 'You may wish to include details such as:',
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      onInputChange(e.target.name, e.target.value);
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onRadioChange) {
      onRadioChange(e.target.name, e.target.value as 'yes' | 'no');
    }
  };

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Form style={{ fontFamily: 'sans-serif', boxSizing: 'none',  marginLeft: '20px', marginBottom: '5em'}}>
      <h1 style={{ fontSize: '24px', fontWeight: '700' }}>{mainTitle}</h1>

      <Form.Input
        width={5}
        label={<Label>Provider name <span style={{ color: 'red' }}>*</span></Label>}
        placeholder="Provider name"
        name="providerName"
        value={providerName}
        onChange={handleInputChange}
      />

      <StyledSelect
        floating
        icon={<Icon fluid name="chevron down" />}
        width={6}
        label={<Label>State/territory <span style={{ color: 'red' }}>*</span></Label>}
        options={options}
        name="stateTerritory"
        value={stateTerritory}
        onChange={(e, data) => onInputChange && onInputChange('stateTerritory', data.value as string)}
      />

      <Divider style={{ marginTop: '40px', border: '1px solid #275D3A', marginBottom: '20px' }} />

      <h2 style={{ marginBottom: '0px' }}>{subTitle}</h2>
      <ul>
        <li>The date and time the incident(s) occurred</li>
        <li>An outline of the issues involved, and</li>
        <li>Whether the complaint relates to a current service provider.</li>
      </ul>

      <Grid columns={2}>
        <Grid.Column width={8}>
          <StyledTextArea
            name="complaintDetails"
            value={complaintDetails}
            onChange={(_, data) => onInputChange && onInputChange('complaintDetails', data.value as string)}
          />
          <p>0/1000 characters</p>
        </Grid.Column>

        <Grid.Column width={8}>
          <Form.Field style={{ marginTop: '96px', marginLeft: '80px' }}>
            <label>Have you spoken to your provider?</label>
            <StyledRadio
              className="ui radio checkbox"
              label="Yes"
              name="spokenToProvider"
              value="yes"
              checked={spokenToProvider === 'yes'}
              onChange={handleRadioChange}
              style={{ transform: 'scale(1.5)', fontSize: '0.6em' }}
            />
            <StyledRadio
              className="ui radio checkbox"
              label="No"
              name="spokenToProvider"
              value="no"
              checked={spokenToProvider === 'no'}
              onChange={handleRadioChange}
              style={{ marginRight: '25px', transform: 'scale(1.5)', fontSize: '0.6em' }}
            />
          </Form.Field>
        </Grid.Column>
      </Grid>

      <Grid columns={2}>
        <Grid.Column width={8}>
          <Form.Field style={{ marginLeft: '40px' }}>
            <label>Have you spoken to your provider?</label>
            <StyledRadio
              className="ui radio checkbox"
              label="Yes"
              name="spokenToProvider"
              value="yes"
              checked={spokenToProvider === 'yes'}
              onChange={handleRadioChange}
              style={{ transform: 'scale(1.5)', fontSize: '0.6em' }}
            />
            <StyledRadio
              className="ui radio checkbox"
              label="No"
              name="spokenToProvider"
              value="no"
              checked={spokenToProvider === 'no'}
              onChange={handleRadioChange}
              style={{ marginRight: '25px', transform: 'scale(1.5)', fontSize: '0.6em' }}
            />
          </Form.Field>
        </Grid.Column>

        <Grid.Column width={8}>
          <Button
            style={{color: '#FFFFFF', marginLeft: '200px', marginTop: '60px',backgroundColor: '#275D3A', }}
            type="button"
            onClick={handleButtonClick}
          >
            Submit
          </Button>
        </Grid.Column>
      </Grid>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
      >
        <Modal.Header style={{ textAlign: 'center', color: '#275D3A' }}>Your Complaint has been Submitted</Modal.Header>
        <Modal.Content>
          <p>We appreciate you taking the time to provide this information.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='#275D3A' style={{ backgroundColor: '#275D3A', color: '#FFFFFF' }} onClick={handleCloseModal}>OK</Button>
        </Modal.Actions>
      </Modal>
    </Form>
  );
};

export default PleaseProvideDetails;
