import React from 'react';
import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterWrapper';
import { Button, FormRow } from './';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const RegisterForm = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <Wrapper>
      <div className="full-w">
      <h2>Register</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <FormRow name={'name'} type={'text'} onChange={handleChange} />
        <FormRow name={'email'} type={'email'} onChange={handleChange} />
        <FormRow name={'password'} type={'password'} onChange={handleChange} />
        <Button type={'submit'} text={'SEND'} />
      </form>
    </Wrapper>
  );
};

export default RegisterForm;
