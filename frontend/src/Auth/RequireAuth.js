import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
const RequireAuth = () => {
  const { serverMessage } = useSelector((state) => state.loginSlice);

  const location = useLocation();
  return serverMessage === "Succesful Login" ? <Outlet /> : <Navigate to={serverMessage === "Succesful Login" ? "/dashboard" : "/"} state={{ from: location }} replace />;
};

export default RequireAuth;
