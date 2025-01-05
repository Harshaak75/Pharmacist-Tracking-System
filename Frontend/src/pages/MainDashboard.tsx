import { useRecoilValue } from "recoil";
import { Sidebars } from "../components/Sidebars";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthSafe } from "../StateManagement/user.state";

export function MainDashboard() {

  const auth = useRecoilValue(AuthSafe);
  const navigate = useNavigate();

  // If not authenticated, redirect to the login page
  if (!auth.isLoggedIn) {
    navigate('/login');
  }

  
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
