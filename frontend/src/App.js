import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shop/Shop";
import { AboutMe } from "./pages/about_me/AboutMe";
import { Contact } from "./pages/contact/Contact";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { Workouts } from "./pages/workouts/Workouts";
import { MyAccount } from "./pages/auth/account/MyAccount";
//import Shop from "@mui/icons-material/Shop";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Community from "./pages/testimonials/Community";
import Faq from "./components/Faq";
import Join from "./pages/subscription/Join";

const Layout = () => {
  return (
    <>
      {/* <Navbar />
      <Outlet />
  <Footer /> */}
      <Header />
      <Outlet />
      <Banner />
      <AboutMe />
      <Workouts />
      <Shop />
      <Community />
      <Faq />
      <Join />
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
      /* {
        path: "/about_me",
        element: <AboutMe />,
      }, */
      {
        path: "/workouts",
        element: <Workouts />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      /* {
        path: "/register",
        element: <Register />,
      }, */
      /* {
        path: "/login",
        element: <Login />,
      }, */
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
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/about_me",
    element: <AboutMe />,
  },
]);

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  });
  return (
    <div className="App">
      <div className="max-w-screen mx-auto bg-page overflow-hidden relative">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
