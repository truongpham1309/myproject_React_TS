import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsListPage from "./pages/ProductsListPage";
// import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
// import ProductDetailPage from "./pages/ProductDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/products" element={<ProductsListPage />} />
        {/* <Route path="/product_detail/:id"  element={<ProductDetailPage idPr={{data}}/>}/> */}
        <Route path="/" element={<LoginPage />} />
        <Route element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}