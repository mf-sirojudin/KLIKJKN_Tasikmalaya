import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home/Home";
import ServiceList from "../pages/ServiceList/ServiceList";
import SearchResult from "../pages/SearchResult/SearchResult";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

import ScrollToHash from "../components/common/ScrollToHash";
import ScrollToTop from "../components/common/ScrollToTop";

function AppRouter() {
  return (
    <BrowserRouter>

       {/* Scroll otomatis ke #hash */}
      <ScrollToHash />

      {/* Scroll ke section tertentu jika ada hash */}
      <ScrollToTop />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Seluruh halaman layanan */}
        <Route
          path="/layanan/:slug"
          element={<ServiceList />}
        />

        <Route
          path="/search"
          element={<SearchResult />}
        />

        <Route
          path="/kontak"
          element={<Contact />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;