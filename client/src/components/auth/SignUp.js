import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const { register, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (error === 'User already exists') {
      console.log('User already exists');
    }
  }, [error, isAuthenticated]);

  const [user, setUser] = useState({
    usename: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    register({
      username,
      email,
      password,
      password2,
    });
  };

  return (
    <div className='form-container'>
      <h1>
        <span className='text-primary'>Sign Up</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>User Name</label>
          <input
            type='text'
            placeholder='username'
            name='username'
            value={username}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Password 2</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input type='submit' value='Sign Up' />
      </form>
    </div>
  );
};

export default SignUp;
