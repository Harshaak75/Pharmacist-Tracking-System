import { Input } from "../components/input";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Button } from "../components/Button";
import axios from "axios";
import { backend_url } from "../config";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import Webcam from "react-webcam";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

export function RepresentativeLogs() {
  const [currentPositon, setCurrentPosition] = useState<
    [number, number] | null
  >(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const doctor_nameRef = useRef<HTMLInputElement>(null);
  const Product_PromotedRef = useRef<HTMLSelectElement>(null);

  const [isWebcamEnabled, setisWebcamEnabled] = useState<boolean>(true);
  const webcamRef = useRef<Webcam>(null);
  const [image, setimage] = useState<string | null>(null);

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

  async function submit(event: React.FormEvent) {
    event.preventDefault();

    const activity_data = {
      name: nameRef.current?.value,
      doctor_name: doctor_nameRef.current?.value,
      product_promoted: Product_PromotedRef.current?.value,
    };

    try {
      const response = await axios.post(
        backend_url + "/representative/create/DailyActivity",
        {
          representative_name: activity_data.name,
          doctor_name: activity_data.doctor_name,
          product_name: activity_data.product_promoted,
          latitude: currentPositon?.[0] || 0,
          longitude: currentPositon?.[1] || 0,
          image: image,
        }
      );

      console.log(response);

      const refs = [nameRef, doctor_nameRef, Product_PromotedRef];

      refs.forEach((ref) => {
        if (ref.current) {
          if (
            ref.current instanceof HTMLInputElement ||
            ref.current instanceof HTMLSelectElement
          ) {
            ref.current.value = "";
          }
        }
      });

      alert("Activity submitted successfully");
    } catch (error) {
      console.log(error);
    }
  }

  function caputre_image() {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      // console.log(typeof screenshot);
      setimage(screenshot);
    }
  }

  return (
    <div className="flex justify-center p-4 items-center min-h-screen bg-gray-100 lg:ml-64">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
          Daily Activity Submission
        </h2>
        <form
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          onSubmit={submit}
        >
          {/* Name */}
          <Input
            reff={nameRef}
            type="text"
            name="name"
            placeholder="Enter representative name"
            label="Name"
          />

          {/* Doctor's Name */}
          <Input
            reff={doctor_nameRef}
            type="text"
            name="doctor"
            placeholder="Enter doctor's name"
            label="Doctor Name"
          />

          {/* Products Promoted */}
          <div>
            <label className="text-green-600">Products Promoted</label>
            <select
              ref={Product_PromotedRef}
              name="product"
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

          {/* Map */}
          <div className="w-full sm:col-span-2 z-20">
            <div className="text-green-600 pb-1">Current Location</div>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              {currentPositon ? (
                <MapContainer
                  center={currentPositon}
                  zoom={13}
                  scrollWheelZoom={true}
                  className="h-full w-full"
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
          </div>

          {/* Image Upload */}

          <div className="sm:col-span-2">
            <div className="text-green-600 text-lg pb-1">Capture Image</div>
            <div className="relative w-full h-auto flex flex-col items-center p-4">
              <Webcam
                audio={false}
                className="rounded-lg w-full max-w-sm sm:max-w-md"
                screenshotFormat="image/jpeg"
                ref={webcamRef}
              />
              <div className="flex mt-4 space-x-4">
                {isWebcamEnabled && (
                  <button
                  type="button"
                    onClick={caputre_image}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Capture
                  </button>
                )}
                <button
                type="button"
                  onClick={() => setisWebcamEnabled((prev) => !prev)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  {isWebcamEnabled ? "Turn Off" : "Turn On"}
                </button>
              </div>
              {image && (
                <div className="mt-4">
                  <p className="text-green-600 text-sm mb-2">
                    Captured Image Preview:
                  </p>
                  <img
                    src={image}
                    alt="Captured"
                    className="w-full max-w-sm rounded-lg border border-gray-300"
                  />
                </div>
              )}
            </div>
          </div>

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
