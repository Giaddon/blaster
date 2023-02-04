import React from 'react';
import { Header, UserAvatar, UserBackground } from '@components';

export default function UserPage({ user }) {
  return (
    <div className='user-page'>
      <UserBackground background={null} />
      <UserAvatar avatar={user.avatar} />
      <Header type="h1" text="User Page" />
    </div>
  )
} 