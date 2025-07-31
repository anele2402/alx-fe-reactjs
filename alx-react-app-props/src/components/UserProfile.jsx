import React from 'react'
import UserContext from './UserContext';
import React, { useContext } from 'react';

function UserProfile(){

const useContext= useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
 };
 export default UserProfile;