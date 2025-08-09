import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import Shop from "./Components/Pages/Shop";
import ContactUs from "./Components/Pages/ContactUs";
import Cart from "./Components/Pages/Cart";
import ProductDetails from "./Components/Pages/CartDetails";
import Categories from "./Components/Pages/Categories";
import ArticlesDetails from "./Components/Pages/ArticlesDetails";
import Articles from "./Components/Pages/Articles";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticlesDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/:id" element={<ProductDetails />} />
          <Route path="/categories/:name" element={<Categories />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
