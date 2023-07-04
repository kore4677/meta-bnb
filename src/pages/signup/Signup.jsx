import React, { useContext, useEffect, useState } from 'react';
import './SIgnup.css';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem('token')) || null
  );

  useEffect(() => {
    if (token) {
      navigate('/place-to-stay');
    }
  }, []);

  const loginUser = async incoming => {
    console.log(incoming);
    try {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/auth/token/login/',
        incoming
      );
      console.log(res);
      if (res.status === 200) {
        setToken(res.data);
        localStorage.setItem('token', JSON.stringify(res.data));
        console.log(res.data);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const registerUser = async incomingData => {
    console.log(incomingData);
    try {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/auth/users/',
        incomingData
      );
      console.log(res.data);

      if (res.status === 201) {
        toast.success('Registered successfully');
        navigate('/login');
        loginUser({
          username: incomingData.username,
          password: incomingData.password,
        });
      }
    } catch (error) {
      console.log(error.response.data.password[0]);
      if (error.response.data.password) {
        toast.error(`${error.response.data.password[0]}`);
      } else if (error.response.data.username) {
        toast.error(`${error.response.data.username[0]}`);
      } else if (error.response.data.email) {
        toast.error(`${error.response.data.email[0]}`);
      }
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          const formData = {
            username,
            password,
            email,
          };
          registerUser(formData);
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          onChange={e => {
            setUsername(e.target.value);
          }}
          type="text"
        />
        <label htmlFor="email">Your Email Address</label>
        <input
          onChange={e => {
            setEmail(e.target.value);
          }}
          type="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={e => {
            setPassword(e.target.value);
          }}
          type="password"
        />
        <button className="form-btn">Continue</button>

        <div>
          <p>Already have an account?</p>
          <Link to="/login">sign In</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
