import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setErrors('All fields are required.');
      return;
    }

    console.log('Form submitted:', formData);

    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Register</h2>

      {errors && <p >{errors}</p>}

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
       
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          
        />
      </label>

      <button type="submit" >
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;
