import { Mainlogo } from "../icons/Mainlogo";
import { SidebarItems } from "./sidebar.items";
import { useNavigate } from "react-router-dom";

export function Sidebars() {

  const navigate = useNavigate();

  const formatRoute = (item: string) => item.replace(/ /g, "-");



  const sidebarItems = [
    "Dashboard",
    "Representatives Logs",
    "Doctor Details",
    "Reports",
    "Contact",
    "Logout",
  ];

  // const CreateDoctor = () =>{
  //   console.log("Creating doctor...");
  // }

  return (
    <div className="w-64 min-h-full bg-white p-3 rounded-br-lg shadow-xl fixed">
      <div className="flex justify-center items-center pt-4">
        <Mainlogo />
      </div>
      <div className="box flex justify-center items-center mt-8">
        <div className="flex flex-col gap-1 ">
          {sidebarItems.map((items, key) => (
            <SidebarItems ItemName={items} key={key} called={()=>{
              navigate(`/${formatRoute(items)}`)
            }} style="p-2" />
          ))}
        </div>
      </div>
    </div>
  );
}
