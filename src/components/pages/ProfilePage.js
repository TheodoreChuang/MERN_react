import React, { Component } from 'react';
import './../App.css';
import NavBar from './../NavBar';
import ProfileInfoCard from '../cards/ProfileInfoCard';
import ChallengeCard from "./../cards/ChallengeCard";


class Profile extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="profile_card">
          <ProfileInfoCard />
        </div>
        <div className="challenge_card">
         <ChallengeCard />
        </div>
      </div>
      
    );
  }
}

export default Profile;