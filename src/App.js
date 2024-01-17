import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Footer } from "./components/index";
import { Home, Admin, ProductList, ProductDetail, Contact, ContactIn, ContactUs, PageNotFound } from './pages/index';

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
          <Route path="/admin" element={user? <Admin /> : <Navigate to="/" />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
