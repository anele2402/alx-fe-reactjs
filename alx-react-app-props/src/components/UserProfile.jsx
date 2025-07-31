import React from 'react'
import UserContext from './UserContext';

function UserProfile(){

const user = UserContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
 };
 export default UserProfile;