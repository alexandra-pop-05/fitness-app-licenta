  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import Header from '../../components/Header';
  import { Footer } from '../../components/Footer';
  import { useEffect } from 'react';
  import { AuthContext } from '../../context/authContext';
  import { useContext } from 'react';
  import AuthImage from '../../assets/img/auth/authImage.jpg';
  import axios from 'axios';

  export const Register = () => {
    const [inputs, setInputs] = useState({
      username: '',
      email: '',
      password: ''
    });
    const [errors, setErrors] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (currentUser) {
        navigate('/');
      }
    }, [currentUser, navigate]);

    const handleChange = e => {
      setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async e => { //async because we making an api req
      e.preventDefault(); //not refresh the page when clicking on the button
      try {
        const res = await axios.post('/register', inputs, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(res);
        console.log(inputs);
        navigate('/login');
        //navigate('/'); // Redirect to the Home page
      } catch (error) {
        setErrors(error.response.data);
      }
    }
  

    return (
      <>
      <Header />
      <div className="relative min-h-screen flex justify-center items-center bg-neutral-500">
        <div className='opacity-50 hidden lg:block absolute inset-y-0 left-0  w-1/2 bg-cover bg-no-repeat ' style={{backgroundImage: `url(${AuthImage})`}}></div>
        <form onSubmit={handleSubmit} className="max-w-md w-full px-4 py-6 bg-transparent bg-neutral-400 rounded-lg shadow-xl relative z-10 lg:w-1/2 lg:ml-auto lg:mr-40" >
          <h2 className="text-2xl font-bold text-center mb-6 text-white">Create your account</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-white font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              /* value={username} */
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-primary-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nickname" className="block text-white font-bold mb-2">
              Nickname
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              /* value={nickname} */
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-primary-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              /* value={email} */
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-primary-100"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              /* value={password} */
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-primary-100 "
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary btn-lg w-full">
              Register
            </button>
          </div>
          {errors && (
            <div className="text-red-500 text-sm mt-2 text-center">
              {errors}
            </div>
          )}
          <div className="flex justify-center mt-4">
            <p className="text-sm text-primary-200">
              Already have an account?{' '}
              <a href="/login" className="font-bold text-neutral-100 hover:text-neutral-200">
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
      <Footer />
      </>
    );
  };
