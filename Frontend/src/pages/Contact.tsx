import { useRecoilValue } from "recoil";
import { Button } from "../components/Button";
import { Input } from "../components/input";
import { AuthSafe } from "../StateManagement/user.state";
import { AcceptReport } from "./AcceptReport";
import { useRef, useState } from "react";
import axios from "axios";
import { backend_url } from "../config";

export function Contact() {

  const authstate = useRecoilValue(AuthSafe);

  const [blur, setblur] = useState(false);

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const subject = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const handleContact = async (e: any) =>{
    e.preventDefault();
    setblur(true);
    const data = {
      name: name.current?.value,
      email: email.current?.value,
      subject: subject.current?.value,
      message: message.current?.value,
    };

    // console.log(data)

    try {
      await axios.post(backend_url + "/representative/create/complain",{
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      })

      const reff = [
        name,
        email,
        subject,
        message,
      ]

      reff.forEach((input) =>{
        if(input.current){
          if (input.current instanceof HTMLInputElement || input.current instanceof HTMLTextAreaElement) {
            input.current.value = '';
          }
        }
      })

      alert("Sent")

      setblur(false)

    } catch (error:any) {
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
    <>
    {authstate.role == "representative" ? 
    <div className="flex justify-center p-4 items-center min-h-screen bg-gray-100 lg:ml-64">
       <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4 sm:mb-6 text-center">
          Contact Us
        </h2>
        <form className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2" onSubmit={handleContact}>
          {/* Name */}
          <Input
            type="text"
            name="name"
            placeholder="Enter representative name"
            label="Name"
            reff={name}
          />

          {/* Email */}
          <Input
            type="email"
            name="email"
            placeholder="Enter representative email"
            label="Email"
            reff={email}
          />

          {/* Subject */}
          <Input
            type="text"
            name="subject"
            placeholder="Enter subject"
            label="Subject"
            reff={subject}
          />

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-green-600 block mb-1">
              Message
            </label>
            <textarea
            ref={message}
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
              disable={blur}
            />
          </div>
        </form>
      </div> 
    </div> : <AcceptReport/>}
    </>
  );
}
