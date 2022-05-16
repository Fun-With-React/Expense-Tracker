import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
const RequireAuth = () => {
  const { token } = useSelector((state) => state.loginSlice);

  const location = useLocation();
  return token ? <Outlet /> : <Navigate to={token ? "/dashboard" : "/"} state={{ from: location }} replace />;
};

export default RequireAuth;
