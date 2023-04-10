import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/home/Home";
import { AboutMe } from "./pages/about_me/AboutMe";
import { Contact } from "./pages/contact/Contact";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { MyAccount } from "./pages/account/MyAccount";
import Shop from "@mui/icons-material/Shop";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about_me",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/my_account",
        element: <MyAccount />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
