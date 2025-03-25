import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./components/Home.jsx";
// import Contact from "./components/Contact.jsx";
// import Index from "./components/Index.jsx";
// import Error from "./components/Error.jsx";
import { lazy } from "react";

const Calculator = lazy(()=> import("./components/Calculator.jsx"));
const Index  = lazy(()=> import("./components/Index.jsx").then(module =>{return {default: module.Index}}));
const TipCalculator = lazy(()=> import("./components/TipCalculator.jsx"));
const Error = lazy(()=> import("./components/Error.jsx"));

const root = document.getElementById("root");

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement : <Error />,
        children: [
            {   
                path : "/",
                element : <TipCalculator />,
            },
            {
                path : "/contact",
                element : <Calculator />
            },
            {
                path : "/index",
                element : <Index /> 
            },
        ]
    }
])

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);



// ReactDOM.createRoot(root).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//         <Route path="/index" element={<Index />}></Route>
//         <Route path="*" element={<Error />}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
