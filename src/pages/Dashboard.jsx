import React from 'react';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const Dashboard = (props) => {
  const { data, loading, error } = useQuery(QUERY_USERS, {
    context: {
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
    },
    fetchPolicy: 'no-cache'
  });

  if (error) {
    console.log(error);
    // return <Redirect to={"/login"} />
  }
  console.log(data?.users)
  return (
    <div>
      <div>Loading...</div>
    </div>
  );
};

export default Dashboard;
