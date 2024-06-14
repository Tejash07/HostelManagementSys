import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
export default function Index() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
