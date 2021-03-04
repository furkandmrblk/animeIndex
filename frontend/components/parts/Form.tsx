import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Input } from './Input';
import { ErrorField } from './Error';
import { RegisterButton } from '../RegistrationS';
import { LoginButton } from '../LoginS';
axios.defaults.withCredentials = true;

export const RegisterForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .max(255, 'Must be 255 characters or less')
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      axios
        .post(`http://localhost:4000/user/register`, {
          name: values.name,
          email: values.email,
          password: values.password,
        })
        .then(() => {
          router.push('/login');
        })
        .catch((error) => {
          // console.log(error.response.data.error.message);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="name"
        name="name"
        placeholder="Name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <ErrorField>{formik.errors.name}</ErrorField>
      ) : null}

      <Input
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorField>{formik.errors.email}</ErrorField>
      ) : null}

      <Input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <ErrorField>{formik.errors.password}</ErrorField>
      ) : null}

      <RegisterButton type="submit">Register</RegisterButton>
    </form>
  );
};

export const LoginForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .max(255, 'Must be 255 characters or less')
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      axios
        .post(`http://localhost:4000/user/login`, {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          console.log(res.data);
        })
        .then(() => {
          router.push('/');
        })
        .catch((error) => {
          alert(error.response.data.error.message);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <ErrorField>{formik.errors.email}</ErrorField>
      ) : null}

      <Input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <ErrorField>{formik.errors.password}</ErrorField>
      ) : null}

      <LoginButton type="submit">Sign In</LoginButton>
    </form>
  );
};
