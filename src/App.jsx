import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Suspense } from "react";
export default function App() {
  return (
    <>
        <NavBar />
        <Suspense fallback={<h1 className="text text-center text-primary">Loading...</h1>}>
          <Outlet />
        </Suspense>
    </>
  );
}
