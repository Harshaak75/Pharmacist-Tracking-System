import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url } from "../config";

export function AcceptReport() {
  const [complaints, setComplaints] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        backend_url + "/representative/complains/list"
      );
      setComplaints(response.data);

      console.log(complaints);
    } catch (error: any) {
      console.error("Error fetching complaints:", error);
    }
  };

  interface complaints {
    subject: string;
    representative_name: string;
    email: string;
    message: string;
    is_resolved: boolean;
    id: number;
  }

  useEffect(() => {
    fetchData();

    const intervel = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(intervel);
  }, []);

  const togggeResolved = async (index: number, currentStatus: boolean) => {
    // alert(index)

    try {
      const response = await axios.put(backend_url + "/representative/complains/update",{
        is_resolved: !currentStatus,
        index,
      })
      console.log(response)
    } catch (error: any) {
      console.error("Error fetching complaints:", error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 lg:ml-64 p-5">
      {/* Complaint List for Admin */}
      <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4 sm:mb-6 text-center">
          Complaints Received
        </h2>
        {complaints.length === 0 ? (
          <p className="text-gray-600 text-center">
            No complaints have been received yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {complaints
              .filter((complaint: complaints) => complaint.is_resolved != true)
              .map((complaint: complaints, index) => (
                <li
                  key={index}
                  className="border border-gray-300 rounded-md p-4 shadow-sm"
                >
                  <div className="flex justify-between items-center">
                  <div className="">
                    <h3 className="text-2xl font-medium text-green-600">
                      {complaint.subject}
                    </h3>
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Name:</strong> {complaint.representative_name}
                    </p>
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Email:</strong> {complaint.email}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Message:</strong> {complaint.message}
                    </p>
                    
                  </div>

                  <div className="flex items-center p-3 rounded-xl bg-green-50"><button onClick={() =>togggeResolved(complaint.id, complaint.is_resolved)}>{complaint.is_resolved ? "Resolved" : "Resolve"}</button></div>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
