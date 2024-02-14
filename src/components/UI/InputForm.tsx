"use client";
import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import Select from './Select';
import TourSelect from './TourSelect';
//import {useTranslations} from 'next-intl'; //изза "use client" не работает перевод, узнать почему.

const InputForm = () => {
  //const t = useTranslations('Contacts')

  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [country, setCountry] = useState('');
  const [tour, setTour] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agreeChecked, setAgreeChecked] = useState(false);


  const sendForm = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
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

    if (!agreeChecked) {
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
      <p style={{fontSize: "160%", fontWeight: "bolder"}}>Booking form</p>
      <form onSubmit={sendForm}>
        <p style={{marginBottom: 0}}>Name <a style={{color: "red"}}>*</a></p>
        <div style={{ width: "100%", display: "flex", gap: "10%"}}>
          <Input
            type="text"
            id='name'
            placeholder="First"
            required
            value={name} 
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Input
            type="text"
            id='last'
            placeholder="Last"
            required
            value={last} 
            onChange={(e) => {
              setLast(e.target.value)
            }}
          />
        </div>
        <p style={{marginBottom: 0}}>Email <a style={{color: "red"}}>*</a></p>
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
          <p style={{marginBottom: 0}}>Country</p>
          <div>
            <Select/>
          </div>
          <p style={{marginBottom: 0}}>Tour</p>
          <div>
            <TourSelect/>
          </div>
          <p style={{marginBottom: 0}}>Number of participants <a style={{color: "red"}}>*</a></p>
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
        <p style={{marginBottom: 0}}>Message</p>
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
            I agree to the terms and conditions
          </label>
        </div>
        <div style={{marginTop: "3%"}}>
          <Button type="Submit" disabled={!agreeChecked}>Send form</Button>
        </div>
      </form>
    </div>
  )
}

export default InputForm