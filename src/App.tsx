import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProductsListPage from "./pages/ProductsListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import ProductsUpdatePage from "./pages/admin/ProductsUpdatePage";
import ProductsCreatePage from "./pages/admin/ProductsCreatePage";
import { configUseAxios } from "./config/axios";
import Layout from "./components/layouts/Layout";
import AdminLayout from "./components/layouts/AdminLayout";

configUseAxios();

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product_detail/:productID" element={<ProductDetailPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/" element={<AdminLayout />} >
          <Route path="/admin/products" element={<AdminHomePage />} />
          <Route path="/admin/update_product/:productID" element={<ProductsUpdatePage />} />
          <Route path="/admin/create_product" element={<ProductsCreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}