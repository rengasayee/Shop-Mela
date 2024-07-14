import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

//Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from "./layouts/HelpLayout";
import ShopLayout from "./layouts/ShopLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/Contact";
import ShopList, { shopsLoader } from "./pages/shops/ShopList";

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
        <Route path='shoplist' element={<ShopList />} loader={shopsLoader}></Route>
      </Route>
    </Route>
  ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
