import { useState } from "react";
import { Mainlogo } from "../icons/Mainlogo";
import { SidebarItems } from "./sidebar.items";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export function Sidebars() {
  const navigate = useNavigate();

  const formatRoute = (item: string) => item.replace(/ /g, "-");

  const [selctedItem, setSelectedItem] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems = [
    "Dashboard",
    "Representatives Logs",
    "Doctor Details",
    "Reports",
    "Contact",
    "Logout",
  ];

  return (
    <div className="">
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <HiX size={24} /> : <HiMenuAlt3 size={25} />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-white p-3 rounded-br-lg shadow-xl transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 z-40`}
      >
        <div className="flex justify-center items-center pt-4">
          <Mainlogo />
        </div>
        <div className="box flex justify-center items-center mt-8">
          <div className="flex flex-col gap-1">
            {sidebarItems.map((item, key) => (
              <SidebarItems
                ItemName={item}
                key={key}
                called={() => {
                  setSelectedItem(item);
                  navigate(`/${formatRoute(item)}`);
                  setIsSidebarOpen(false); // Close sidebar on item click
                }}
                style="p-2"
                selected={selctedItem === item}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for when sidebar is open on smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
