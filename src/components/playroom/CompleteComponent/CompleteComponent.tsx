/* eslint-disable prettier/prettier */
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import './CompleteComponent.css';

interface CompleteComponentProps {
  headerText: string;
  contentText: string;
  footerText: string;
  textAreaValue: string;
  onButtonClick?: () => void;
  onTextAreaChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CompleteComponent: React.FC<CompleteComponentProps> = ({
  headerText,
  contentText,
  footerText,
  textAreaValue,
  onButtonClick,
  onTextAreaChange,
}: CompleteComponentProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [radioValue, setRadioValue] = useState<string>('');
  const [selectValue, setSelectValue] = useState<string>('');

  const handleHomeClick = () => {
    // eslint-disable-next-line no-alert
    alert('You have pressed "Home"');
  };

  function handleAboutClick() {
    // eslint-disable-next-line no-alert
    alert('You have pressed "About"');
  }

  function handleContactClick(event: MouseEvent<HTMLButtonElement>) {
    // eslint-disable-next-line no-alert
    alert('You have pressed "Contact"');
    event.preventDefault();
  }

  return (
    <div className='complete-component'>
      <header className="complete-component-header">
        {headerText}
        <button type="button" onClick={handleHomeClick} className="button-home">
          Home
        </button>
      </header>
      <div className="complete-component-content">{contentText}</div>
      <button type="button" onClick={onButtonClick} className="complete-component-button">
        Click Me
      </button>
      <input
        type="text"
        className="complete-component-input"
        placeholder="Input Text"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />
      <textarea
        value={textAreaValue}
        onChange={onTextAreaChange}
        className="complete-component-textarea"
      />
      <form>
        <label>
          <input
            type="radio"
            value="option1"
            checked={radioValue === 'option1'}
            onChange={() => setRadioValue('option1')}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={radioValue === 'option2'}
            onChange={() => setRadioValue('option2')}
          />
          Option 2
        </label>
      </form>
      <select
        value={selectValue}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value)}
        className="complete-component-select"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <nav className="complete-component-navbar">
        <ul>
          <li>
            <button type="button" onClick={handleAboutClick} className="button-link about-button">
              About
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleContactClick}
              className="button-link contact-button"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <footer className="complete-component-footer">
        <p>{footerText}</p>
        <div className="footer-header">Footer</div>
      </footer>
    </div>
  );
};


