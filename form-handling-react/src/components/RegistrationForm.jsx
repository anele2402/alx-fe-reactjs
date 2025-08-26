import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors('Username is required.');
      return;
    }

    if (!email) {
      setErrors('Email is required.');
      return;
    }

    if (!password) {
      setErrors('Password is required.');
      return;
    }

    console.log('Form submitted:', { username, email, password });

    
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors('');
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
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
