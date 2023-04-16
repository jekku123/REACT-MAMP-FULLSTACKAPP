/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const [inputs, setInputs] = useState({ username: '', email: '', mobile: '' });
  const navigate = useNavigate();
  const path = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:8005/api/index.php/user/${path.id}`
    );
    setInputs(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8005/api/index.php/user/${path.id}/edit`,
        inputs
      );
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setInputs((values) => {
      return { ...values, [name]: value };
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Edit User</legend>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='username'
              id='username'
              onChange={handleChanges}
              value={inputs.username}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              onChange={handleChanges}
              value={inputs.email}
            />
          </div>
          <div>
            <label htmlFor='mobile'>Mobile</label>
            <input
              type='text'
              name='mobile'
              id='mobile'
              onChange={handleChanges}
              value={inputs.mobile}
            />
          </div>
          <button onClick={handleSubmit}>Edit</button>
        </fieldset>
      </form>
    </main>
  );
};

export default EditUser;
