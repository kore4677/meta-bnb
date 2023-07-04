import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(
    () => JSON.parse(localStorage.getItem('token')) || null
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate('/place-to-stay');
    }
  }, []);

  const loginUser = async incoming => {
    try {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/auth/token/login/',
        incoming
      );
      console.log(res);
      if (res.status === 200) {
        setToken(res.auth_token);
        localStorage.setItem('token', JSON.stringify(res.data.auth_token));
        navigate('/place-to-stay');
        window.location.reload()
        toast.success(`welcome ${incoming.username}`);
        //
      }
    } catch (error) {
      console.log(error.response.data.password);
      if (error) {
        if (error.response.data.password) {
          toast.error(`${error.response.data.password[0]}`);
        } else if (error.response.data.username) {
          toast.error(`${error.response.data.username[0]}`);
        }
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
          };
          loginUser(formData);
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          onChange={e => {
            setUsername(e.target.value);
          }}
          type="text"
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
          <p>Dont have an account?</p>
          <Link to="/signup">sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
