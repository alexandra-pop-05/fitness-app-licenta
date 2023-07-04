import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/Footer";
import { Shop } from "./pages/shop/SingleProducts/Shop";
import Pricing from "./pages/shop/Bundles/Pricing";
import { AboutMe } from "./pages/about_me/AboutMe";
import { About } from "./pages/about/About";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { Workouts } from "./pages/workouts/Workouts";
import { MyAccount } from "./pages/auth/account/MyAccount";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Community from "./pages/testimonials/Community";
import QA from "./components/QA";
import Join from "./pages/Join/Join";
import Cart from "./pages/cart/Cart";
import ScrollToTop from "./ScrollToTop";
import { Product } from "./pages/shop/SingleProducts/Product";
import { Bundles } from "./pages/shop/Bundles/Bundles";
import { MyProducts } from "./pages/myProducts/MyProducts";
import { Write } from "./pages/testimonials/Write";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Banner />
      <About />
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
        path: "/workouts",
        element: <Workouts />,
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
    path: "/shop/subscriptions/:productId",
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
  {
    path: "/testimonials",
    element: <Write />,
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
