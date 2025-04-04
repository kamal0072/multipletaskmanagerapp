import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Suspense } from "react";
export default function App() {
  return (
    <>
        <NavBar />
        <Suspense fallback={<h1 className="text text-center text-red-500 text-5xl font-stretch-condensed font-bold py-48">Loading...</h1>}>
          <Outlet />
        </Suspense>
    </>
  );
}
