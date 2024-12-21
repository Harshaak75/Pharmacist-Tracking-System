
import React, { useState } from "react";
import { Input } from "../components/input";

export function DoctorForm() {

  return (
    <div className="flex justify-center p-4 items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">Doctor Registration</h2>
        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}

          <Input type="text" name="name" placeholder="Enter doctor's name" label="Name"/>

          {/* Gender */}
          <div>
            <label className="text-green-600">Gender</label>
            <select
              name="gender"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-200"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth */}

          <Input type="date" name="date_of_birth" label="Date of Birth"/>

          {/* Qualification */}
          <div>
            <label className="text-green-600">Qualification</label>
            <input
              type="text"
              name="qualification"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-200"
              placeholder="Enter qualification"
              required
            />
          </div>

          <Input type="text" name="qualification" placeholder="Enter qualification" label="Qualification"/>

          {/* Year of Experience */}

          <Input type="number" name="year_of_experience" placeholder="Enter years of experience" label="Years of Experience"/>

          {/* Licence Number */}

          <Input type="text" name="licence_number" placeholder="Enter licence number" label="Licence Number"/>

          {/* Hospital Name */}

          <Input type="text" name="hospital_name" placeholder="Enter hospital name" label="Hospital Name"/>

          {/* Speciality */}

          <Input type="text" name="speciality" placeholder="Enter speciality" label="Speciality"/>

          {/* Address */}

          <Input type="text" name="address" placeholder="Enter address" label="Address"/>

          {/* Phone Number */}

          <Input type="text" name="phone_number" placeholder="Enter phone number" label="Phone Number"/>


          {/* Email */}

          <Input type="email" name="email" placeholder="Enter email" label="Email"/>

          {/* Password */}

          <Input type="password" name="password" placeholder="Enter password" label="Password"/>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Register Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
