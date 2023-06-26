  import React, { useContext, useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import Header from '../../components/Header';
  import { Footer } from '../../components/Footer';
  import AuthImage from '../../assets/img/auth/authImage.jpg';
  import { AuthContext } from '../../context/authContext';
  import axios from 'axios';

  export const Login = () => {
    const [inputs, setInputs] = useState({
      username: '',
      password: ''
    });
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const {currentUser, login} = useContext(AuthContext); // Destructure the login function from authContext
    
    //set the default headers for all Axios requests
    //axios.defaults.headers.common['Authorization'] = `Bearer ${currentUser?.token}`;

    // Redirect to home if the user is already logged in
    useEffect(() => {
      if (currentUser) {
        navigate('/');
      }
    }, [currentUser, navigate]);
  
    const handleChange = e => {
      setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent the form from submitting
      try {
        await login(inputs); // Call the login function from authContext with the inputs from the form
        //axios.defaults.headers.common['Authorization'] = `Bearer ${currentUser?.token}`; //update the headers with the new token after login
        navigate('/');
      } catch (error) {
        setErrors(error.response.data);
      }
    };
  
    return (
      <>
      <Header />
      <div className="relative min-h-screen flex justify-center items-center bg-neutral-500">
        <div className='opacity-50 hidden lg:block absolute inset-y-0 left-0  w-1/2 bg-cover bg-no-repeat ' style={{backgroundImage: `url(${AuthImage})`}}></div>
        <form onSubmit={handleSubmit} className="bg-transparent max-w-md w-full px-4 py-6 bg-neutral-400 rounded-lg shadow-xl relative z-10 lg:w-1/2 lg:ml-auto lg:mr-40">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">Log in to your account</h2>
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
          <div className="mb-6">
            <label htmlFor="password" className="block text-white font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
             /*  value={password} */
              required
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-primary-100 "
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary btn-lg w-full">
              Log in
            </button>
          </div>
          {errors && (
            <div className="text-red-500 text-sm mt-2 text-center">
              {Object.keys(errors).map((key) => (
                <div key={key}>{errors[key]}</div>
              ))}
            </div>
          )}
          <div className="flex justify-center mt-4">
            <p className="text-sm text-primary-200">
              Don't have an account?{' '}
              <a href="/register" className="font-bold text-neutral-100 hover:text-neutral-200">
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
      <Footer />
      </>
    );
  };
