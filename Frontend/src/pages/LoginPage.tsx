import React, { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { BirdIcon } from '../icons/BirdIcon';
import axios from 'axios';
import { backend_url } from '../config';

import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AuthSafe } from '../StateManagement/user.state';

const LoginPage: React.FC = () => {

  const setAuthState = useSetRecoilState(AuthSafe);

  const val = useRecoilValue(AuthSafe);

  const employeeId = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [message, setmessage] = useState<string | null>(null)

  

  const navigate = useNavigate();

  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  const login = async (e: any) =>{
    e.preventDefault();
    // console.log(employeeId.current?.value)

    try {
      const response = await axios.post(backend_url + "/medtrackpro/login",{
        employeeId: employeeId.current?.value,
        password: password.current?.value,
      });
  
      console.log('Response:', response.data);

      const role = response.data

      setAuthState({ isLoggedIn: true, role: role}); 

      console.log(val.role)

      navigate('/Dashboard'); // Navigate to dashboard after successful login
  
    } catch (error) {
      navigate('/');
      console.error('Error:', error);
      setmessage("Retry the login")
    }

    
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section - Image/Graphic */}
      <div
        className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center bg-green-100"
        style={{ backgroundColor: '#A6CBBA' }}
      >
        <BirdIcon  />
      </div>

      {/* Right Section - Login Form */}
      <animated.div style={animation} className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Welcome Back</h1>

          {message && <div className="mb-4 text-center text-red-600 font-medium">
              {message}
            </div>}

          {/* Form */}
          <form className="space-y-4" onSubmit={login}>
            {/* Employee ID Field */}
            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <input
              ref={employeeId}
                type="text"
                id="employeeId"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                placeholder="Enter your Employee ID"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
              ref={password}
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-500 mt-4">
            Don't have an account?{' '}
            <a href="#" className="text-green-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default LoginPage;