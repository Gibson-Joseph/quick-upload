import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/renderings/Login/Login";
import Layout from "./Layout/Layout";
import QuickUpload from "./components/renderings/QuickUpload/QuickUpload";
import { ProtectedRoute } from "./lib/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-full h-full">
      <ToastContainer />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<QuickUpload />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
