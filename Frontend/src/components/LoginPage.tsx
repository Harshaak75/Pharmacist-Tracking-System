import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { BirdIcon } from '../icons/BirdIcon';

const LoginPage: React.FC = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

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

          {/* Form */}
          <form className="space-y-4">
            {/* Employee ID Field */}
            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <input
                type="text"
                id="employeeId"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                placeholder="Enter your Employee ID"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
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