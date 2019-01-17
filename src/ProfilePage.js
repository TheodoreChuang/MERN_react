import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ProfileInfoCard from './components/ProfileInfoCard';


class Profile extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProfileInfoCard />
      </div>
      
    );
  }
}

export default Profile;