"use client";
import React, { FormEvent, useState } from 'react'
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import Select from './Select';
import TourSelect from './TourSelect';

const InputForm = ({...props}: any) => { 

  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [country, setCountry] = useState('');
  const [tour, setTour] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreeChecked, setAgreeChecked] = useState(false);


  const sendForm = async (e: FormEvent) => {
    console.log('Data', name, last, country, tour, number, email, message);
    e.preventDefault();

    const response = await fetch("/api/sendForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        last,
        country,
        tour,
        number,
        email,
        message
      }),
    });

    {/*Change it*/}
    if (response.ok) {
      alert('Please agree to the terms and conditions before submitting the form.');
    } else {
      alert("Successful")
    }

  setName('');
  setLast('');
  setCountry('');
  setTour('');
  setNumber('');
  setEmail('');
  setMessage('');
  };

  return (
    <div>
      <h2 className='contacts_form_header'>{props.formHeader}</h2>
      <form onSubmit={sendForm} className='contact_form'>
        <p style={{marginBottom: 0}}>{props.formTitle} <a style={{color: "red"}}>*</a></p>
        <div style={{ width: "100%", display: "flex", gap: "5%"}}>
          <Input
            type="text"
            id='name'
            placeholder={props.formPlaceholder1}
            required
            value={name} 
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Input
            type="text"
            id='last'
            placeholder={props.formPlaceholder2}
            required
            value={last} 
            onChange={(e) => {
              setLast(e.target.value)
            }}
          />
        </div>
        <p style={{marginBottom: 0}}>{props.mail} <a style={{color: "red"}}>*</a></p>
        <Input
          type="email"
          id='email'
          placeholder=""
          required
          value={email} 
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <div>
          <p style={{marginBottom: 0}}>{props.countryTitle}</p>
          <div>
            <Select/>
          </div>
          <p style={{marginBottom: 0}}>{props.tourTitle}</p>
          <div>
            <TourSelect/>
          </div>
          <p style={{marginBottom: 0}}>{props.numberTitle} <a style={{color: "red"}}>*</a></p>
          <Input
            type="number"
            id='number'
            placeholder=""
            required
            value={number} 
            onChange={(e) => {
              setNumber(e.target.value)
            }}
          />
        </div>
        <p style={{marginBottom: 0}}>{props.messageTitle}</p>
        <TextArea
          id='message'
          required
          value={message} 
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <div>
          <label style={{ whiteSpace: 'nowrap' }}>
            <input
              type="checkbox"
              checked={agreeChecked}
              onChange={() => setAgreeChecked(!agreeChecked)}
              style={{ marginRight: '1%' }}
            />
            {props.agreeTitle}
          </label>
        </div>
        <div style={{marginTop: "3%"}}>
          <Button type="Submit" disabled={!agreeChecked}>{props.buttonTitle}</Button>
        </div>
      </form>
    </div>
  )
}

export default InputForm