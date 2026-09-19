import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Episodes from "../pages/Episodes";
import Watch from "../pages/Watch";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public pages */}
      <Route path="/" element={<Home />} />

      <Route path="/episodes" element={<Episodes />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* Protected page */}
      <Route
        path="/watch/:id"
        element={
          <ProtectedRoute>
            <Watch />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default AppRoutes;