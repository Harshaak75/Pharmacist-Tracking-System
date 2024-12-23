import { Sidebars } from "../components/Sidebars";
import { Outlet } from "react-router-dom";
import { HamIcon } from "../icons/HamIcon";

export function MainDashboard() {
  return (
    <div className="">
      <div className="">
        <Sidebars />
        
      </div>
      
      <div className="overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
