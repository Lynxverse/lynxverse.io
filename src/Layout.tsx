import React, { useEffect, useMemo } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "components/template/Navbar";
import { Footer } from "components/template/Footer";

const Layout = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-[#081850] via-[#081850] to-[#2B99B1]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
};
export default Layout;
