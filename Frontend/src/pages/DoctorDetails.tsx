import React, { useRef} from "react";
import { Input } from "../components/input";
import { Button } from "../components/Button";
import axios from "axios";
import { backend_url } from "../config";

export function DoctorForm() {

  const nameRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const qualificationRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLInputElement>(null);
  const licenceRef = useRef<HTMLInputElement>(null);
  const hospitalRef = useRef<HTMLInputElement>(null);
  const specialityRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function submit(event: React.FormEvent){
    // TODO: Implement form submission logic

    event.preventDefault();

    const formData = {
      name: nameRef.current?.value,
      gender: genderRef.current?.value,
      date_of_birth: dobRef.current?.value,
      qualification: qualificationRef.current?.value,
      year_of_experience: experienceRef.current?.value,
      licence_number: licenceRef.current?.value,
      hospital_name: hospitalRef.current?.value,
      speciality: specialityRef.current?.value,
      address: addressRef.current?.value,
      phone_number: phoneRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    
    console.log(formData);

    try {
      const response = await axios.post(backend_url + "/representative/create/doctor", {
        name: formData.name,
        gender: formData.gender,
        date_of_birth: formData.date_of_birth,
        qualification: formData.qualification,
        year_of_expirened: formData.year_of_experience,
        licence_number: formData.licence_number,
        hospital_name: formData.hospital_name,
        speciality: formData.speciality,
        address: formData.address,
        phone_number: formData.phone_number,
        email: formData.email,
        password: formData.password,
      });

      console.log(response)

      const refs = [
        nameRef,
        genderRef,
        dobRef,
        qualificationRef,
        experienceRef,
        licenceRef,
        hospitalRef,
        specialityRef,
        addressRef,
        phoneRef,
        emailRef,
        passwordRef,
      ];
    
      // Iterate over the refs and reset each one
      refs.forEach(ref => {
        if (ref.current) {
          if (ref.current instanceof HTMLInputElement || ref.current instanceof HTMLSelectElement) {
            ref.current.value = '';
          }
        }
      });
    
      // Show a success alert
      alert('Created');

    } catch (error: any) {
      if (error.response) {
        // The server responded with an error status code
        console.error("Server error:", error.response.data);
      } else {
        // Other errors (e.g., network errors)
        console.error("Error in posting data:", error.message);
      }
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 lg:ml-64 p-4 xl:ml-64">
      <div className="w-full max-w-screen-md bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
          Doctor Registration
        </h2>
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={submit}>
          {/* Name */}
          <Input
            reff={nameRef}
            type="text"
            name="name"
            placeholder="Enter doctor's name"
            label="Name"
          />

          {/* Gender */}
          <div>
            <label className="text-green-600">Gender</label>
            <select
              ref={genderRef}
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
          <Input reff={dobRef} type="date" name="date_of_birth" label="Date of Birth" />

          {/* Qualification */}
          <Input
            reff={qualificationRef}
            type="text"
            name="qualification"
            placeholder="Enter qualification"
            label="Qualification"
          />

          {/* Year of Experience */}
          <Input
            reff={experienceRef}
            type="number"
            name="year_of_experience"
            placeholder="Enter years of experience"
            label="Years of Experience"
          />

          {/* Licence Number */}
          <Input
            reff={licenceRef}
            type="text"
            name="licence_number"
            placeholder="Enter licence number"
            label="Licence Number"
          />

          {/* Hospital Name */}
          <Input
            reff={hospitalRef}
            type="text"
            name="hospital_name"
            placeholder="Enter hospital name"
            label="Hospital Name"
          />

          {/* Speciality */}
          <Input
            reff={specialityRef}
            type="text"
            name="speciality"
            placeholder="Enter speciality"
            label="Speciality"
          />

          {/* Address */}
          <Input
            reff={addressRef}
            type="text"
            name="address"
            placeholder="Enter address"
            label="Address"
          />

          {/* Phone Number */}
          <Input
            reff={phoneRef}
            type="text"
            name="phone_number"
            placeholder="Enter phone number"
            label="Phone Number"
          />

          {/* Email */}
          <Input
            reff={emailRef}
            type="email"
            name="email"
            placeholder="Enter email"
            label="Email"
          />

          {/* Password */}
          <Input
            reff={passwordRef}
            type="password"
            name="password"
            placeholder="Enter password"
            label="Password"
          />

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <Button
              type="submit"
              style="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              title="Register Doctor"
            />
          </div>
        </form>
      </div>
    </div>
  );
}