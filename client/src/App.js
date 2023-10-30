import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Productdescscreen from "./screens/Productdescscreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Orderscreen from "./screens/Orderscreen";
import Orderinfoscreen from "./screens/Orderinfoscreen";
import Userprofile from "./screens/Userprofile";
import Adminscreen from "./screens/Adminscreen";
import Userslistscreen from "./screens/Userslistscreen";
import Orderslistscree from "./screens/Orderslistscree";
import Addproductscreen from "./screens/Addproductscreen";
import Productslistscreen from "./screens/Productslistscreen";
import Editproductscreen from "./screens/Editproductscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homescreen />} />
          <Route exact path="/product/:id" element={<Productdescscreen />} />
          <Route exact path="/cart" element={<Cartscreen />} />
          <Route exact path="/login" element={<Loginscreen />} />
          <Route exact path="/register" element={<Registerscreen />} />
          <Route exact path="/orders" element={<Orderscreen />} />
          <Route exact path="/profile" element={<Userprofile />} />
          <Route
            exact
            path="/orderinfo/:orderid"
            element={<Orderinfoscreen />}
          />

          <Route path="/admin" element={<Adminscreen />}>
            {/* <Route index  /> */}
            <Route path="userslist" element={<Userslistscreen />} />
            <Route path="orderslist" element={<Orderslistscree />} />
            <Route path="addnewproduct" element={<Addproductscreen />} />
            <Route path="productslist" element={<Productslistscreen />} />
            <Route path="editproduct/:id" element={<Editproductscreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
