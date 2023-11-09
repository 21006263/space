import React from 'react';
import { Form, Divider, Radio, Select } from 'semantic-ui-react';

const options = [
  { key: 'option1', text: 'Option 1', value: 'option1' },
  { key: 'option2', text: 'Option 2', value: 'option2' },
];

const PleaseProvider: React.FC = () => {
  const [value, setValue] = React.useState('');

  return (
    <div style={{
      fontFamily:
      'Public Sans',
      }}>
      <Divider style={{border: '1px solid #275D3A' }} />
      <h1>Please provide your details:</h1>
      <p>If you wish to make a confidential or anonymous complaint, it is better if you call our contact centre on 1800 035 544 and ask to speak to our complaints team.</p>
      <Form>
        <Form.Group>
          <Form.Field width={3} style={{ marginRight: '160px'}}>
            <label>First name</label>
            <input placeholder='First name' />
          </Form.Field>
          <Form.Field width={3}>
            <label>Last name</label>
            <input placeholder='Last name' />
          </Form.Field>
        </Form.Group>
        <Form.Input width={3} label='Phone' placeholder='Phone' />
        <Form.Input width={4} label='Email' placeholder='Email' />
        <Form.Group>
          <Form.Field width={4} style={{ marginRight: '96px' }}>
            <label>I am a:</label>
            <Select placeholder='' options={options} selection icon='angle down' />
          </Form.Field>
          <Form.Field width={4}>
            <label>Where did this incident happen?</label>
            <Select placeholder='' options={options} selection icon='angle down' />
          </Form.Field>
        </Form.Group>
        <Form.Input width={4} fluid label='Name of person with disability?' placeholder='Name' />
        <Form.Field style={{ marginTop: '120px', marginLeft: '40px'}} >
          <label>What is your preferred method of communication?</label>
          <Radio
            label='Yes'
            name='radioGroup'
            value='yes'
            checked={value === 'yes'}
            onChange={() => setValue('yes')}
            style={{ marginRight: '36px' }}
          />
          <Radio
            label='No'
            name='radioGroup'
            value='no'
            checked={value === 'no'}
            onChange={() => setValue('no')}
          />
        </Form.Field>
      </Form>
      <Divider style={{ marginTop: '120px', border: '1px solid #275D3A', marginBottom: '20px'}} />
    </div>
  );
};

export default PleaseProvider;


