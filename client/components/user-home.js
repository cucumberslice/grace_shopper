import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserPage from './UserPage';

/**
 * COMPONENT
 */

export const UserHome = (props) => {
  const {email, userId} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <UserPage userId={userId} />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    userId: state.user.id
  }
}

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
