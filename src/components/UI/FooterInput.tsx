"use client";
import React, { useState } from 'react'

export default function FooterInput({title, mail, messages, button, pl1, pl2, ...props}: any) {
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

    if (!response.ok) {
      // Обработка ошибок, если статус ответа не в диапазоне 200-299
      console.error(`Ошибка запроса: ${response.status}`);
    }

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
            {title}
          </label>
          <label htmlFor='last'>
          </label>
        </div>
        <div style={{display: "flex", gap: "3%"}}>
          <div>
            <div style={{ border: "1px solid #6a5acd" }}>
              <input
                type='text'
                id='name'
                placeholder={pl1}
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
              placeholder={pl2}
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
          {mail}
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
          {messages}
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
          {button}
        </button>
      </div>
    </form>
  )
};