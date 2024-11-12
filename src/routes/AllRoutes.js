import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsListPage, OrderDetailPage ,ProductDetail, Login, Register, CartPage2, Checkout,  OrderPage, DashboardPage, ResetPasswordPage, PageNotFound , ChangePasswordPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { GiftWrappingInfo } from "../info_pages";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsListPage />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Nueva ruta para restablecimiento de contraseña */}
        <Route path="reset-password/:uidb64/:token" element={<ResetPasswordPage />} />
        <Route path="change-password" element={<ChangePasswordPage />} />

        <Route path="cart" element={<ProtectedRoute><CartPage2 /></ProtectedRoute>} />
        <Route path="buy" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="orders" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="orders/:asin" element={<ProtectedRoute><OrderDetailPage /></ProtectedRoute>} />
        <Route path="info-regalos" element={<GiftWrappingInfo />} />


        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}
