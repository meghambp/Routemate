import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { ProductDetail } from './components/ProductDetail';
import { ProductList } from './components/ProductList';
import { PageNotFound } from "./components/PageNotFound";
import { ContactIn } from "./components/ContactIn";
import { ContactUs } from "./components/ContactUs";

import './App.css';



function App() {
  const user =false;
  return (
    <div className="App">

      <main>
        <Header />
        <Routes>
          <Route path="/" end element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>    
            <Route path="in" element={<ContactIn />} />    
            <Route path="us" element={<ContactUs />} />    
          </Route>
          <Route path="/admin" element={user? <ProductList /> : <Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
