import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DoctorForm } from "./pages/DoctorDetails";
import { MainDashboard } from "./pages/MainDashboard";
import { RepresentativeLogs } from "./pages/RepresentativeLogs";
import { Contact } from "./pages/Contact";
import { Report } from "./pages/Report";
import AdminCreate from "./components/AdminCreate";
import LoginPage from "./pages/LoginPage";
import { useRecoilState } from "recoil";
import { AuthSafe } from "./StateManagement/user.state";

function App() {
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const [authState] = useRecoilState(AuthSafe);

    return authState.isLoggedIn ? children : <Navigate to="/login" replace />;
  };

  // Redirect Logged-in Users Away from Login Page
  const RedirectIfAuthenticated = ({ children }: { children: JSX.Element }) => {
    const [authState] = useRecoilState(AuthSafe);

    console.log(authState.isLoggedIn)

    return authState.isLoggedIn ? (
      <Navigate to="/Dashboard" replace />
    ) : (
      children
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <LoginPage />
            </RedirectIfAuthenticated>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Doctor-Details" element={<DoctorForm />} />
          <Route path="Representatives-Logs" element={<RepresentativeLogs />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Reports" element={<Report />} />
        </Route>
        {/* <Route path='Logout' element={<AdminCreate/>} /> */}
        <Route path="/admin/create/258741325" element={<AdminCreate />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
