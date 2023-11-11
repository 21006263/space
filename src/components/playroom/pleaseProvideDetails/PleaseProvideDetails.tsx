import React from 'react';
import { Button, Form, TextArea, Divider, Grid, Icon, Label, Radio } from 'semantic-ui-react';
import styled from 'styled-components';

interface Option {
  key: string;
  text: string;
  value: string;
}

interface PleaseProvideDetailsProps {}

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

const StyledRadio = styled(Radio)`
  margin-right: 6em !important;
  &.ui.radio.checkbox input.hidden + label {
    cursor: pointer;
    padding-left: 15px;
    margin: 15px;
    padding: 0 24px;
  }
`;

const PleaseProvideDetails: React.FC<PleaseProvideDetailsProps> = () => {
  return (
    <Form style={{ fontFamily: 'sans-serif', boxSizing: 'none' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700' }}>Please provide details of this NDIS provider?</h1>

      <Form.Input width={5} label={<Label>Provider name <span style={{ color: 'red' }}>*</span></Label>} placeholder="Provider name" />

      <StyledSelect
        floating
        icon={<Icon fluid name="chevron down" />}
        width={6}
        label={<Label>State/territory <span style={{ color: 'red' }}>*</span></Label>}
        options={options}
      />

      <Divider style={{ marginTop: '40px', border: '1px solid #275D3A', marginBottom: '20px' }} />

      <h2 style={{ marginBottom: '0px' }}>Tell us about your complaint</h2>
      <h3 style={{ marginTop: '0px' }}>You may wish to include details such as:</h3>
      <ul>
        <li>The date and time the incident(s) occurred</li>
        <li>An outline of the issues involved, and</li>
        <li>Whether the complaint relates to a current service provider.</li>
      </ul>

      <Grid columns={2}>
        <Grid.Column width={8}>
          <Form.Field control={TextArea} />
          <p>0/1000 characters</p>
        </Grid.Column>

        <Grid.Column width={8}>
          <Form.Field style={{ marginTop: '96px', marginLeft: '80px' }}>
            <label>Have you spoken to your provider?</label>
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
        </Grid.Column>
      </Grid>

      <Grid columns={2}>
        <Grid.Column width={8}>
          <Form.Field style={{ marginLeft: '40px' }}>
            <label>Have you spoken to your provider?</label>
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
        </Grid.Column>

        <Grid.Column width={8}>
          <Button
            style={{ backgroundColor: '#275D3A', color: '#FFFFFF', marginLeft: '200px', marginTop: '60px' }}
            type="submit"
          >
            Submit
          </Button>
        </Grid.Column>
      </Grid>
    </Form>
  );
};

export default PleaseProvideDetails;

