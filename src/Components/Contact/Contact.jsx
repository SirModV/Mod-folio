import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


const Contact = () => {

  const statusEl = document.getElementById('status');

  const [formData, setFormData] = useState({
    fromName: '',
    from_email: '',
    message: '',
  });
  const { fromName, from_email,  message } = formData;

  const handleSubmit = (e) => {
    document.getElementById('email-status').textContent = '';
    e.preventDefault();
    if (
      fromName === '' ||
      from_email === '' ||
      message === ''
    ) {
      statusEl.innerText =
       'please fill in all required fields.';
      statusEl.style.color = '#d16262';
    }else {
        statusEl.innerText = 'Email sent successfully';
        statusEl.style.color = '#d16262';
      }
  };


  const storeData = (e) => {
    document.getElementById('status').textContent = '';
    document.getElementById('email-status').textContent = '';

    if (e.target.name === 'from_email') {
      const emailStatusEl = document.getElementById('email-status');
 

      if (e.target.value === '') {
        emailStatusEl.innerText = '';
      } else {
        if (validateEmail(e.target.value)) {
          emailStatusEl.innerText = 'Valid Email.';
          emailStatusEl.style.color = '#1d3557';
        } else {
          emailStatusEl.innerText = 'Invalid email format, please update.';
          emailStatusEl.style.color = '#d16262';
        }
      }
    }
    if(e.target.name=== "fromName"){
      document.getElementById("errorName").innerText = "";
    }
    
    if(e.target.name=== "from_email"){
      document.getElementById("errorEmail").innerText = "";
    }
    
    if(e.target.name=== "message"){
      document.getElementById("errorMessage").innerText = "";
    }
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateEl = (e, errorPlacholder, defaultPlaceholder, id) => {
    if (e.target.value === '') {
      document.getElementById(id).innerText = errorPlacholder;
      
    } else {
      document.getElementById(id).placeholder = defaultPlaceholder;
      document.getElementById(id).style.border = '2px solid transparent';
    }
  };
  const checkForm = (e) => {
    if (e.target.name === 'fromName') {
      updateEl(e, 'Full name  Required*', 'Full name*', 'errorName');
    }
    if (e.target.name === 'from_email') {
      updateEl(e, 'E-mail  Required*', 'E-mail*', 'errorEmail');
    }

    if (e.target.name === 'message') {
      updateEl(e, 'Message  Required*', 'Message*', 'errorMessage');
    }
  };



  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <h1 id="main-section-header" className='mt-5'>Contact</h1>
        <hr id="main-section-hr" />
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <div className="form-inner-container mt-4">
          <input
            onBlur={(e) => checkForm(e)}
            onChange={storeData}
            className="subject"
            type="text"
            name="fromName"
            id="fromName"
            placeholder="Full name*"
          />
          <p id='errorName'></p>
          <input
            onBlur={(e) => checkForm(e)}
            onChange={storeData}
            name="from_email"
            id="from_email"
            className="subject"
            type="email"
            placeholder="E-mail*"
          />
<p id='errorEmail'></p>
          <textarea
            onBlur={(e) => checkForm(e)}
            rows={5}
            onChange={storeData}
            name="message"
            className="subject"
            id="msg"
            placeholder="Message*"
          ></textarea>
          <p id='errorMessage'></p>
        </div>
        <p id="email-status"></p>
        <p id="status"></p>
        <button id="sendBtn" className='mb-5 btn-primary'>Send</button>
        </div>
       
      </form>
    </>
  );
};

export default Contact;
