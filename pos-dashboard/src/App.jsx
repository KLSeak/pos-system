import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Category from "./pages/category/Category";
import FormCategory from "./pages/category/FormCategory";
import AdminLayout from "./layouts/AdminLayout";
import Product from "./pages/product/Product";
import FormProduct from "./pages/product/FormProduct";
import ListSale from "./pages/sale/ListSale";
import POS from "./pages/sale/POS";
import Invoice from "./pages/sale/Invoice";
import SaleReport from "./pages/report/SaleReport";
import Login from "./pages/Login";
import ChasierLayout from "./layouts/CashierLayout";
import UpdateCategory from "./pages/category/UpdateCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ==== Admin Layout ==== */}
          <Route path="/" element={<AdminLayout />}>
            <Route path="" element={<Dashboard />}></Route>

            <Route path="/category" element={<Category/>}></Route>
            <Route path="/category/create" element={<FormCategory/>}></Route>
            <Route path="/category/update/:id" element={<UpdateCategory/>}></Route>

            <Route path="/product" element={<Product/>}></Route>
            <Route path="/product/create" element={<FormProduct/>}></Route>
            <Route path="/sale/list" element={<ListSale/>}></Route>
            <Route path="/sale/pos" element={<POS/>}></Route>
            <Route path="/report/sale" element={<SaleReport/>}></Route>
          </Route>

          <Route path="/cashier" element={<ChasierLayout/>}>
              <Route path="/cashier" element={<POS/>}></Route>
          </Route>
          
          <Route path="/sale/invoice/:invoiceNumber" element={<Invoice/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
