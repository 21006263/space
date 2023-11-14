// PleaseProvider.tsx
import React, { FC, useState, ChangeEvent } from 'react';
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
  &.ui.radio.checkbox label {
    cursor: pointer;
    padding-left: 15px;
    margin: 15px;
    padding: 0 24px;
  }
`;

const FormLabel: FC<{ label: string; value: string; onChange: (value: string) => void }> = ({ label, value, onChange }) => (
  <Form.Field width={4} style={{ marginRight: '120px' }}>
    <label>{label}</label>
    <input placeholder={label} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
  </Form.Field>
);

interface PleaseProviderProps {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  role?: string;
  incidentLocation?: string;
  personWithDisabilityName?: string;
  communicationMethod?: string;
  onInputChange?: (inputName: string, value: string) => void;
  onRadioChange?: (radioName: string, value: string) => void;
  titles?: {
    mainTitle?: string;
    subTitle?: string;
  };
}

const PleaseProvider: FC<PleaseProviderProps> = ({
  firstName = '',
  lastName = '',
  phone = '',
  email = '',
  role = '',
  incidentLocation = '',
  personWithDisabilityName = '',
  communicationMethod = '',
  onInputChange,
  onRadioChange,
  titles = {},
}) => {
  const [firstNameValue, setFirstNameValue] = useState(firstName);
  const [lastNameValue, setLastNameValue] = useState(lastName);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [emailValue, setEmailValue] = useState(email);

  const handleInputChange = (inputName: string, value: string) => {
    switch (inputName) {
      case 'First name':
        setFirstNameValue(value);
        break;
      case 'Last name':
        setLastNameValue(value);
        break;
      case 'Phone':
        setPhoneValue(value);
        break;
      case 'Email':
        setEmailValue(value);
        break;
      default:
        break;
    }

    if (onInputChange) {
      onInputChange(inputName, value);
    }
  };

  return (
    <div style={{ fontFamily: 'Public Sans', marginLeft: '20px', marginRight: 'auto' }}>
      <Divider style={{ border: '1px solid #275D3A' }} />
      <h1>{titles.mainTitle || 'Please provide your details:'}</h1>
      <p>
        {titles.subTitle ||
          'If you wish to make a confidential or anonymous complaint, it is better if you call our contact centre on 1800 035 544 and ask to speak to our complaints team.'}
      </p>
      <Form>
        <Form.Group>
          <FormLabel label="First name" value={firstNameValue} onChange={(value) => handleInputChange('First name', value)} />
          <FormLabel label="Last name" value={lastNameValue} onChange={(value) => handleInputChange('Last name', value)} />
        </Form.Group>
        <FormLabel label="Phone" value={phoneValue} onChange={(value) => handleInputChange('Phone', value)} />
        <Form.Field width={5}>
          <label>Email</label>
          <input placeholder='Email' value={emailValue} onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('Email', e.target.value)} />
        </Form.Field>
        <Form.Group>
          <Form.Field width={5} style={{ marginRight: '60px' }}>
            <label>I am a:</label>
            <StyledSelect fluid icon={<Icon name="chevron down" />} options={options} value={role} onChange={(e, { value }) => onInputChange && onInputChange('Role', value as string)} />
          </Form.Field>
          <Form.Field width={5}>
            <label>Where did this incident happen?:</label>
            <StyledSelect fluid icon={<Icon name="chevron down" />} options={options} value={incidentLocation} onChange={(e, { value }) => onInputChange && onInputChange('Incident Location', value as string)} />
          </Form.Field>
        </Form.Group>
        <FormLabel label="Name of person with disability?" value={personWithDisabilityName} onChange={(value) => handleInputChange('Name of Person with Disability', value)} />
        <Form.Field style={{ marginTop: '120px', marginLeft: '30px'}}>
          <label>What is your preferred method of communication?</label>
          <StyledRadio
            className="ui radio checkbox"
            label="Yes"
            name="radioGroup2"
            value="yes"
            checked={communicationMethod === 'yes'}
            onChange={() => onRadioChange && onRadioChange('Communication Method', 'yes')}
            style={{ transform: 'scale(1.5)', fontSize: '0.6em' }}
          />
          <StyledRadio
            className="ui radio checkbox"
            label="No"
            name="radioGroup2"
            value="no"
            checked={communicationMethod === 'no'}
            onChange={() => onRadioChange && onRadioChange('Communication Method', 'no')}
            style={{ marginRight: '25px', transform: 'scale(1.5)', fontSize: '0.6em' }}
          />
        </Form.Field>
      </Form>
      <Divider style={{ marginTop: '120px', border: '1px solid #275D3A', marginBottom: '20px' }} />
    </div>
  );
};

export default PleaseProvider;


