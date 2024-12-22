import { Input } from "../components/input";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "../components/Button";
import axios from "axios";
import { backend_url } from "../config";

export function RepresentativeLogs() {
  const [currentPositon, setCurrentPosition] = useState<
    [number, number] | null
  >(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const doctor_nameRef = useRef<HTMLInputElement>(null);
  const Product_PromotedRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting location:", error);
          setCurrentPosition([0, 0]); // Default fallback
        }
      );
    } else {
      console.error("Geolocation not supported by the browser.");
      setCurrentPosition([0, 0]); // Default fallback
    }
  }, []);


  async function submit(event: React.FormEvent){

    event.preventDefault();

    const activity_data = {
      name: nameRef.current?.value,
      date: dateRef.current?.value,
      doctor_name: doctor_nameRef.current?.value,
      product_promoted: Product_PromotedRef.current?.value,
    }

    try {
      const response = await axios.post(backend_url + "/representative/create/DailyActivity",{
        representative_name : activity_data.name,
        doctor_name: activity_data.doctor_name,
        date: activity_data.date,
        product_name: activity_data.product_promoted,
        latitude: currentPositon?.[0] || 0,
        longitude: currentPositon?.[1] || 0,
      })

      console.log(response)

      const refs = [
        nameRef,
        dateRef,
        doctor_nameRef,
        Product_PromotedRef,
      ]

      refs.forEach(ref => {
        if (ref.current) {
          if (ref.current instanceof HTMLInputElement || ref.current instanceof HTMLSelectElement) {
            ref.current.value = '';
          }
        }
      });

      alert("Activity submitted successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center p-4 items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
          Daily Activity Submission
        </h2>
        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2" onSubmit={submit}>
          {/* Name */}

          <Input
          reff={nameRef}
            type="text"
            name="name"
            placeholder="Enter representative name"
            label="Name"
          />

          {/* Date of Birth */}

          <Input reff={dateRef} type="date" name="date_of_birth" label="Date" />

          {/* Qualification */}

          <Input
          reff={doctor_nameRef}
            type="text"
            name="doctor"
            placeholder="Enter doctor's name"
            label="Doctor Name"
          />

          {/* Year of Experience */}

          <div>
            <label className="text-green-600">Products Promoted</label>
            <select
              ref={Product_PromotedRef}
              name="gender"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-200"
              required
            >
              <option value="">Select Products</option>
              <option value="Dolo 650 Tablet">Dolo 650 Tablet</option>
              <option value="Sumo L 650 Tablet">Sumo L 650 Tablet</option>
              <option value="Xykaa Rapid 650 Tablet">
                Xykaa Rapid 650 Tablet
              </option>
              <option value="Dolomed 650mg Tablet">Dolomed 650mg Tablet</option>
              <option value="CP 650mg Tablet">CP 650mg Tablet</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* <Input type="text" name="location" placeholder="Enter location" label="Location"/> */}

          {/* Map */}

          <div className="w-64 h-64 rounded-lg mb-5">
            <div className="text-green-600 pb-1">Current Location</div>
            {currentPositon ? (
              <MapContainer
                center={currentPositon}
                zoom={13}
                scrollWheelZoom={true}
                // style={{ height: "100%", width: "100%" }}
                className="h-full w-full rounded-lg"
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={currentPositon}>
                  <Popup>Current Location</Popup>
                </Marker>
              </MapContainer>
            ) : (
              <p>Getting location...</p>
            )}
          </div>

          {/* image */}

          <Input
            type="file"
            name="image"
            placeholder="Upload yout image"
            label="Upload your image"
          />

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center">
            <Button
            onclick={submit}
              type="submit"
              style="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
              title="Submit Activity"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
