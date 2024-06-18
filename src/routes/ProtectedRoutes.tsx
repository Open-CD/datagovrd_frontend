import { Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  // const auth = useSelector((state) => state.auth);

  // return auth.isAuthenticated ? <Outlet /> : <Login />;
  return <Outlet />;
};

export default ProtectedRoutes;
