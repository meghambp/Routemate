import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";


import './App.css';

function App() {
  
  return (
    <div className="App">

      <main>
        <Header />
        <AllRoutes />
        <Footer />
      </main>
    </div>
  );
}

export default App;
