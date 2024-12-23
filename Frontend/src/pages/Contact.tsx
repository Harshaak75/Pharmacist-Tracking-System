import { Button } from "../components/Button";
import { Input } from "../components/input";

export function Contact() {
  return (
    <div className="flex justify-center p-4 items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4 sm:mb-6 text-center">
          Contact Us
        </h2>
        <form className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          {/* Name */}
          <Input
            type="text"
            name="name"
            placeholder="Enter representative name"
            label="Name"
          />

          {/* Email */}
          <Input
            type="email"
            name="email"
            placeholder="Enter representative email"
            label="Email"
          />

          {/* Subject */}
          <Input
            type="text"
            name="subject"
            placeholder="Enter subject"
            label="Subject"
          />

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-green-600 block mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-200 resize-none h-32 sm:h-40"
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
