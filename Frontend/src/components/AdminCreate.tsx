import{ useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import { backend_url } from '../config';

const AdminCreate = () => {
  const [adminDetails, setAdminDetails] = useState({ username: '', password: '', key: '',Aname: '', email: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    setAdminDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(adminDetails)

    await axios.post(backend_url + '/medtrackpro/createAdmin',{
      name: adminDetails.Aname,
      employeeId: adminDetails.username,
      email: adminDetails.email,
      password: adminDetails.password, 
      key: adminDetails.key,
    })

    // console.log(response);
    // Add admin creation logic here
    setSuccessMessage('Admin created successfully!');
    setAdminDetails({ username: '', password: '', key: '' ,Aname: '', email: '' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <animated.div style={formAnimation} className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-green-600 text-center mb-6">
            Create Admin Account
          </h2>
          {successMessage && (
            <div className="mb-4 text-center text-green-600 font-medium">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
              <label htmlFor="Aname" className="block text-sm text-green-600">
                Admin Name
              </label>
              <input
                type="text"
                id="Aname"
                name="Aname"
                value={adminDetails.Aname}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Enter Admin Name"
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm text-green-600">
                Admin Id
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={adminDetails.username}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-green-600">
                Admin Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={adminDetails.email}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-green-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={adminDetails.password}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Enter password"
                required
              />
            </div>
            <div>
              <label htmlFor="key" className="block text-sm text-green-600">
                Serect Key
              </label>
              <input
                type="password"
                id="key"
                name="key"
                value={adminDetails.key}
                onChange={handleInputChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-600 focus:outline-none"
                placeholder="Enter Serect Key"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Create Admin
            </button>
          </form>
        </animated.div>
      </div>
    </div>
  );
};

export default AdminCreate;
