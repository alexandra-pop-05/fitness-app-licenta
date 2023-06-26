import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/Footer";
import { Home } from "./pages/home/Home";
import { Shop } from "./pages/shop/SingleProducts/Shop";
import Pricing from "./pages/shop/Bundles/Pricing";
import { AboutMe } from "./pages/about_me/AboutMe";
import { Contact } from "./pages/contact/Contact";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { Workouts } from "./pages/workouts/Workouts";
import { MyAccount } from "./pages/auth/account/MyAccount";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Community from "./pages/testimonials/Community";
import QA from "./components/QA";
import Join from "./pages/subscription/Join";
import Cart from "./pages/cart/Cart";
import ScrollToTop from "./ScrollToTop";
import { Product } from "./pages/shop/SingleProducts/Product";
import { Bundles } from "./pages/shop/Bundles/Bundles";
import { MyProducts } from "./pages/myProducts/MyProducts";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Banner />
      <AboutMe />
      <Workouts />
      <Pricing />
      <Community />
      <QA />
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
      {
        path: "/workouts",
        element: <Workouts />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/my_account",
        element: <MyAccount />,
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
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/subscriptions/:subscriptionId",
    element: <Bundles />,
  },
  {
    path: "/shop/products/:productId",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/myProducts",
    element: <MyProducts />,
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
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
