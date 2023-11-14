import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Illustration from '@salesforce/design-system-react/components/illustration';
import Button from '@salesforce/design-system-react/components/button'; // `~` is replaced with design-system-react at runtime
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import Input from '@salesforce/design-system-react/components/input'; 
import { useState, useEffect } from "react";


class App extends Component {
  
  render() {
    const fetchSecretData = ()=> {
      const URL = process.env.REACT_APP_SALES_API_URL
      const headers = { 
        "Access-Control-Allow-Origin": "https://salesforce.deochoaseis.com",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "Content-Type",
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-encoded"
      };
      fetch(URL, {
        method: 'POST',
        withCredentials: true,
        headers,
        body: JSON.stringify(
          { "grant_type": process.env.REACT_APP_SALES_GRANT_TYPE,
            "client_id": process.env.REACT_APP_SALES_CLIENT_ID,
            "username": process.env.REACT_APP_SALES_USERNAME,
            "client_secret": process.env.REACT_APP_SALES_CLIENT_SECRET,
            "password": process.env.REACT_APP_SALES_PASSWORD
          })
      })
          .then(response => response.json())
          .then(data => console.log(data.data))
          .catch((error) => console.log(error)); //console.log(JSON.stringify(error)));
  }
    return (
      <div className='App'>
        <header className='App-header'>
          <Illustration
            heading='Boostraping create-react-app 2x with Salesforce Lightning Design System'
            messageBody={
              <span>
                Step-by-step instruction can be found at{' '}
                <a href='https://github.com/synle/create-react-app-salesforce-lightning'>
                  this tutorial guide
                </a>
              </span>
            }
            path='/assets/images/illustrations/empty-state-no-access.svg#no-access'
            size='large'
          />
        </header>
        {fetchSecretData()}
{process.env.REACT_APP_SALES_API_URL}
        <IconSettings iconPath="/assets/icons">
				<section className="slds-grid slds-wrap slds-grid_pull-padded slds-grid_vertical-align-center customj">
					<div className="slds-col slds-col_padded slds-size_12-of-12">
						<h1 className="slds-text-title_caps slds-p-vertical_medium">
							Form submission to Sales
						</h1>
						<Input id="your_name" label="Name" placeholder="Your name" />
					</div>
          <div className="slds-col slds-col_padded slds-size_12-of-12">
						<Input id="your_email" label="Email" placeholder="Your email" />
					</div>

          <div className="slds-col slds-col_padded slds-size_12-of-12 slds-p-top_x-small">
          {/*<div className="slds-x-small-buttons_horizontal"> */}
					<Button label="Submit" variant="brand"
            onClick={() => {
              console.log('Active Button Clicked');
            }} 
          />

					<Button
						disabled
						label="Disabled"
						onClick={() => {
							console.log('Disabled Button Clicked');
						}}
						variant="brand"
					/>
          </div>

        </section>
        </IconSettings>

      </div>
      
    );
  }
}

export default App;
