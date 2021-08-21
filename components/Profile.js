

import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Avatar from 'react-avatar';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    user && <Avatar src={user.picture} alt={user.name} email={user.email} name={user.name} size="40" round={true}/>
  );
}