import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style/ContactStyle.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_lozmjht', 'template_91rzaof', {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message
    }, 'dmT--IRUrFTPdBCSM')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mesaj trimis cu succes!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Eroare la trimiterea mesajului.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div id='contact' className='contact-wrapper'>
      <h2 className='contact-title'>Contact</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='contact-input'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='contact-input'>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='contact-input'>
          <textarea
            id='message'
            name='message'
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className='contact-submit' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
