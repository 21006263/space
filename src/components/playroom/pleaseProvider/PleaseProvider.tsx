import React, { FC, useState } from 'react';
import { Form, Divider, Radio, Select, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const options = [
  { key: 'option1', text: 'Option 1', value: 'option1' },
  { key: 'option2', text: 'Option 2', value: 'option2' },
];

const StyledSelect = styled(Form.Select)`
  i.chevron.down.icon {
    margin: 0 17em;
  }
`;



const StyledRadio = styled(Radio)`
  margin-right: 6em !important;
  &.ui.radio.checkbox input.hidden + label {
    cursor: pointer;
    padding-left: 15px;
    margin: 15px;
    padding: 0 24px;
  }
`;




const FormLabel: FC<{ label: string }> = ({ label }) => (
  <Form.Field width={4} style={{ marginRight: '120px' }}>
    <label>{label}</label>
    <input placeholder={label} />
  </Form.Field>
);

const PleaseProvider: FC = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ fontFamily: 'Public Sans' }}>
      <Divider style={{ border: '1px solid #275D3A' }} />
      <h1>Please provide your details:</h1>
      <p>
        If you wish to make a confidential or anonymous complaint, it is better
        if you call our contact centre on 1800 035 544 and ask to speak to our
        complaints team.
      </p>
      <Form>
        <Form.Group>
          <FormLabel label="First name" />
          <FormLabel label="Last name" />
        </Form.Group>
        <FormLabel label="Phone" />
        <Form.Field width={5}>
          <label>Email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Group>
          <Form.Field width={5} style={{ marginRight: '60px' }}>
            <label>I am a:</label>
            <StyledSelect fluid icon={<Icon name="chevron down" />} options={options} />
          </Form.Field>
          <Form.Field width={5}>
            <label>Where did this incident happen?:</label>
            <StyledSelect fluid icon={<Icon name="chevron down" />} options={options} />
          </Form.Field>
        </Form.Group>
        <FormLabel label="Name of person with disability?" />
        <Form.Field style={{ marginTop: '120px', marginLeft: '30px'}}>
          <label>What is your preferred method of communication?</label>
          <StyledRadio
              className="ui radio checkbox"
              label="Yes"
              name="radioGroup2"
              value="yes"
              style={{ transform: 'scale(1.5)', fontSize: '0.6em' }}
            />
            <StyledRadio
              className="ui radio checkbox"
              label="No"
              name="radioGroup2"
              value="no"
              style={{ marginRight: '25px', transform: 'scale(1.5)', fontSize: '0.6em' }}
            />
        </Form.Field>
      </Form>
      <Divider style={{ marginTop: '120px', border: '1px solid #275D3A', marginBottom: '20px' }} />
    </div>
  );
};

export default PleaseProvider;
