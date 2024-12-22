import { Sidebars } from "../components/Sidebars";
import { Outlet } from "react-router-dom";

export function MainDashboard() {
  return (
    <div className="">
      <div className="">
        <Sidebars />
      </div>
      <div className="ml-64 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
