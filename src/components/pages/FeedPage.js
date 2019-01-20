import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ChallengeCard from '../components/ChallengeCard';

class Feed extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div class="challenge_card">
         <ChallengeCard />
        </div>
        <div class="challenge_card">
         <ChallengeCard />
         <div class="challenge_card">
         <ChallengeCard />
        </div>
        </div>
      </div>
     
    );
  }
}

export default Feed;