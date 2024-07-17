import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from "./layouts/HelpLayout";
import ShopLayout from "./layouts/ShopLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import ShopList, { shopsLoader } from "./pages/shops/ShopList";
import NotFound from './pages/NotFound';
import ShopDetails, { shopDetailsLoader } from "./pages/shops/ShopDetails";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Route>

      <Route path='shops' element={<ShopLayout />}>
        <Route index element={<ShopList />} loader={shopsLoader}></Route>
      
        <Route path=':id'
              element={<ShopDetails />}
              loader = {shopDetailsLoader}
        ></Route>
      </Route>

      <Route path='*' element={<NotFound />}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
