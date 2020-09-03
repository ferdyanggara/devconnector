import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from './../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const Login = ({ login, isAuthenticated }) => {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  // redirect if login
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign In into Your Account
      </p>
      <form
        className='form'
        action='create-profile.html'
        onSubmit={handleSubmit}
      >
        <div className='form-group'>
          <input
            onChange={(e) => handleChange(e)}
            type='email'
            placeholder='Email Address'
            name='email'
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            onChange={(e) => handleChange(e)}
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
          />
        </div>

        <input
          onChange={(e) => handleChange(e)}
          type='submit'
          className='btn btn-primary'
          value='Login'
        />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
