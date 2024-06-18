import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Institution } from "../pages";
// import ProtectedRoutes from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institucion" element={<Institution />} />

        {/* <Route element={<ProtectedRoutes />}></Route> */}

        {/* 404 - Page not found */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
