import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex min-h-screen flex-col bg-black">
          
          <Navbar />

          <main className="flex-1 pt-[76px]">
            <AppRoutes />
          </main>

          <Footer />

        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;