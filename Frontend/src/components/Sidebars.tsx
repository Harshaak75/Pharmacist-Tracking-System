import { Mainlogo } from "../images/Mainlogo";
import { SidebarItems } from "./sidebar.items";

export function Sidebars() {
  const sidebarItems = [
    "Dashboard",
    "Representatives Logs",
    "Doctor Details",
    "Reports",
    "Contact",
    "Logout",
  ];

  return (
    <div className="w-64 h-[33rem] bg-white p-3">
      <div className="flex justify-center items-center pt-4">
        <Mainlogo />
      </div>
      <div className="box flex justify-center items-center mt-8">
        <div className="flex flex-col gap-1">
          {sidebarItems.map((items, key) => (
            <SidebarItems ItemName={items} key={key} style="p-2" />
          ))}
        </div>
      </div>
    </div>
  );
}
