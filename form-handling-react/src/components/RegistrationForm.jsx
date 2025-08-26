import React, { useState } from 'react';

/*
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
*/


function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrors('All fields are required.');
      return;
    }

    console.log('Form submitted:', { username, email, password });

    // Clear form
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Register</h2>

      {errors && <p style={styles.error}>{errors}</p>}

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}         {/* ✅ matches expected format */}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}            {/* ✅ matches expected format */}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}         {/* ✅ matches expected format */}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </label>

      <button type="submit" style={styles.button}>
        Submit
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
};


export default RegistrationForm;
