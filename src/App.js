import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import LandingPage from "./screens/LandingPage";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import PeripheralsScreen from "./screens/PeripheralsScreen";
import PrebuiltsScreen from "./screens/PrebuiltsScreen";
import CartScreen from "./screens/CartScreen";
import UserScreen from "./screens/UserScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
          <Header />
          <main className="py-3">
            <Container>
              <Routes>
                <Route path="/" element={<LandingPage />} exact />
                <Route path="/products" element={<HomeScreen />} />
                <Route path="/product/:id" element={<ProductScreen />} />
                <Route path="/peripherals" element={<PeripheralsScreen />} />
                <Route path="/prebuilts" element={<PrebuiltsScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/user" element={<UserScreen />} />
                <Route path="/checkout" element={<CheckoutScreen />} />
              </Routes>
            </Container>
          </main>
          <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
