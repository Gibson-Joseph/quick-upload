import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full flex">
      <main className="w-full h-full flex flex-col relative">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
