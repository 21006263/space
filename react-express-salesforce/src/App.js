import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Illustration from '@salesforce/design-system-react/components/illustration';
import Button from '@salesforce/design-system-react/components/button'; // `~` is replaced with design-system-react at runtime
import Spinner from '@salesforce/design-system-react/components/spinner';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import Input from '@salesforce/design-system-react/components/input'; 
import { useState, useEffect } from "react";

export function getApiDomain() {
  if (window.location.hostname === "localhost") {
      return "http://localhost:3001";
  }
  return window.location.origin;
}

/*fetch("/api")
  .then((response) => response.json())  
	.then((dog) => console.log(dog));*/

function Apps() {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [message, setMessage] = useState("");
    const [typeMessage, setTypeMessage] = useState("");
    const [loading, setIsLoading] = useState(false);

    const headers = { 
      //"Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    };
  
    let handleSubmit = async (e) => {
      setIsLoading(true)
      e.preventDefault();
      try {
        let res = fetch(getApiDomain()+"/api/", {
          method: "POST",
          headers,
          body: JSON.stringify({
            name: name,
            lastname: lastname,
            email: email
          }),
        })
        .then((response) => { 
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          if(typeof data.message.Result.errorCode != "undefined"){
              setTypeMessage('info');
              setMessage("It looks as if duplicates exist for this lead. "+data.message.Result.errorCode);
              console.info(data.message.Result.errorCode);
          }else{
              setMessage("Success! Your entry has been saved in salesforce. ID:"+data.message.Result.id);
              setTypeMessage('success');
              console.info(data.message.Result.id);
          }
        })
        .then((loading) => setIsLoading(false))
        .catch(error => {
          //console.error(error);
          setTypeMessage('error');
          setMessage("It looks as some error in server.");
          setTimeout(() => {
            setIsLoading(false)
          },1000)
        });
      } catch (err) {
        console.log("aqui");
        console.log(err);
      }
    };
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
        
        <IconSettings iconPath="/assets/icons">
				<section className="slds-grid slds-wrap slds-grid_pull-padded slds-grid_vertical-align-center customj">

        <form onSubmit={handleSubmit} className="formsales slds-form--compound" >
					<div className="slds-col slds-col_padded slds-size_12-of-12">
						<h1 className="slds-text-title_caps slds-p-vertical_medium">
							Form submission to Sales
						</h1>
						<Input type="text" id="name" label="Name" value={name} placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}
             />
					</div>
          <div className="slds-col slds-col_padded slds-size_12-of-12">
						<Input type="text" id="lastname" label="Last Name" value={lastname} placeholder="Your last name" 
                    onChange={(e) => setLastName(e.target.value)}
            />
					</div>
          <div className="slds-col slds-col_padded slds-size_12-of-12">
						<Input type="text" id="email" label="Email" value={email} placeholder="Your email" 
                    onChange={(e) => setEmail(e.target.value)}
            />
					</div>

          {loading ? 
            <div style={{ width: '5rem' }}>
              <Spinner
                size="small"
                variant="base"
                isInline={true}
                containerClassName='slds-align_absolute-center'
                assistiveText={{ label: 'Main Frame Loading...' }}
              />
            </div>
          : null}
          {/* Render the fetched data here */}

          <div className="slds-col slds-col_padded slds-size_12-of-12 slds-p-top_x-small">
          {/*<div className="slds-x-small-buttons_horizontal"> */}
					<Button type="submit" label="Submit" variant="brand"
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

        </form>

        {message ? 
        <div className="slds-section slds-col_padded">
              <div className={'slds-scoped-notification slds-media slds-media_center slds-theme_'+typeMessage} role="status">
                <div className="slds-media__figure">
                  <span className={'slds-icon_container slds-icon-utility-'+typeMessage} title={typeMessage}>
                    <svg className="slds-icon slds-icon_small" aria-hidden="true">
                      <use xlinkHref={'/assets/icons/utility-sprite/svg/symbols.svg#'+typeMessage}></use>
                    </svg>
                    <span className="slds-assistive-text">{typeMessage}</span>
                  </span>
                </div>
                <div className="slds-media__body">
                  <p>{message}
                  </p>
                </div>
              </div>
        </div>
        : null
        }


        </section>
        </IconSettings>

      </div>
      
    );
}
export default Apps;
