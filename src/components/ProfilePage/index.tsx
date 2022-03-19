import React from 'react';
import Feed from '../Feed';
import { Container, Banner, Avatar, ProfileData, LocationIcon, CalendarIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return <Container>
    <Banner>
      <Avatar />
    </Banner>
    <ProfileData>
      <EditButton outlined>Edit Profile</EditButton>
      <h1>Bruno Moeller</h1>
      <h2>@brunomoellerr</h2>
      <p>Developer at <a href="https://www.upwork.com/freelancers/~012d76e63899ab360c">Upwork</a></p>
      <ul>
        <li>
          <LocationIcon />
          Porto Alegre, Brazil
        </li>
        <li>
          <CalendarIcon />
          Joined Jan 2022
        </li>
      </ul>
      <Followage>
        <span>
          following <strong>143</strong>
        </span>
        <span>
          <strong>1433</strong> followers
        </span>
      </Followage>
    </ProfileData>
    <Feed />
  </Container>;
}

export default ProfilePage;