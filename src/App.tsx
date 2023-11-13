import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsListPage from "./pages/ProductsListPage";
// import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/products" element={<ProductsListPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/product_detail/:id" element={<ProductDetailPage  />} /> */}
      </Routes>
    </BrowserRouter>
  );
}