"use client";
import React, { useState } from 'react'

export default function FooterInput() {
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //const [loading, setLoading] = useState(false);

  const sendMail = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        last, 
        email,
        message
      }),
    });

    setName('');
    setLast('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={sendMail}>
      <div >
        <div style={{display: "flex", width: "48%"}}>
          <label htmlFor='name'>
            Name
          </label>
          <label htmlFor='last'>
          </label>
        </div>
        <div style={{display: "flex"}}>
          <div>
            <div style={{ border: "1px solid #6a5acd" }}>
              <input
                type='text'
                id='name'
                placeholder='First'
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                style={{ width: "100%", border: "none", outline: "none" }}
              />
            </div>
          </div>
          <div style={{ border: "1px solid #6a5acd" }}>
            <input
              type='text'
              id='last'
              placeholder='Last'
              required
              value={last}
              onChange={(e) => {
                setLast(e.target.value)
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor='email'>
          Email
        </label>
        <div style={{ border: "1px solid #6a5acd" }}>
          <input
            type='email'
            id='email'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div>
        <label htmlFor='message'>
          Message
        </label>
        <div style={{ border: "1px solid #6a5acd" }}>
          <textarea
            rows={4}
            name='message'
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div >
        <button
          type='submit'
          style={{marginTop: "10%", color: "#fff", backgroundColor: "#6a5acd", cursor: "pointer", border: "1px solid #ebeef5", padding: "3%"}}
        >
          Send message
        </button>
      </div>
    </form>
  )
};