import "./App.css";
import React from "react";
import "../src/assets/css/templatemo.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Footer from "./Components/footer";
import SingleProduct from "./Pages/SingleProduct";
import Computers from "./Pages/computers";
import Printers from "./Pages/printers";
import CCTV from "./Pages/CCTV";
import EPABX from "./Pages/EPABX";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import AddPost from "./Pages/Admin/AddPost";
import ViewProducts from "./Pages/Admin/ViewProducts";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route
            exact
            path="/shop/product/:id"
            component={SingleProduct}
          ></Route>
          <Route exact path="/shop/computers" component={Computers}></Route>
          <Route exact path="/shop/cctv" component={CCTV}></Route>
          <Route exact path="/shop/printers" component={Printers}></Route>
          <Route exact path="/shop/epabx" component={EPABX}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/admin" component={AddPost}></Route>
          <Route exact path="/admin/products" component={ViewProducts}></Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
