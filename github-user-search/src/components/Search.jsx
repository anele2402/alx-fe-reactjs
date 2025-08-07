
import React, { useState } from 'react';

import { fetchUserData } from '../services/githubService';



const inputStyle = {
  borderRadius: '5px',
  padding: '10px 12px',
  backgroundColor: '#f8d4f0',
  color: '#000',
  width: '250px',
  border: '1px solid #ccc',
  fontSize: '16px',
  outline: 'none',
};

const btnStyle = {
  marginLeft: '10px',
  padding: '10px 16px',
  fontSize: '16px',
  borderRadius: '5px',
  backgroundColor: '#6200ea',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const resultStyle = {
  marginTop: '20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  maxWidth: '400px',
  backgroundColor: '#f4f4f4',
};

const avatarStyle = {
  width: '100px',
  borderRadius: '50%',
  marginBottom: '10px',
};

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username.trim());
      setUser(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }

    setUsername('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="Enter GitHub username"
        />
        <button style={btnStyle} type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div style={resultStyle}>
          <img src={user.avatar_url} alt="avatar" style={avatarStyle} />
          <h3>{user.name || user.login}</h3>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;