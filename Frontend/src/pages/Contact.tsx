import { Button } from "../components/Button";
import { Input } from "../components/input";

export function Contact() {
  return (
    <div className="flex justify-center p-4 items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
          Contact Us
        </h2>
        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Name */}

          <Input
            type="text"
            name="name"
            placeholder="Enter representative name"
            label="Name"
          />

          {/* email */}

          <Input
            type="email"
            name="email"
            placeholder="Enter representative email"
            label="Email"
          />

          {/* Qualification */}

          <Input
            type="text"
            name="subject"
            placeholder="Enter subject"
            label="Subject"
          />

          {/* message */}

          {/* <label htmlFor="">Enter Message</label> */}
          <div className="">
            <p className="text-green-600">Message</p>
            <textarea
              name="message"
              id=""
              placeholder="Enter message"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-200"
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center">
            <Button
              type="submit"
              style="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              title="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
