import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/renderings/Login/Login";
import Layout from "./Layout/Layout";
import QuickUpload from "./components/renderings/QuickUpload/QuickUpload";

function App() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={null}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<QuickUpload />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
