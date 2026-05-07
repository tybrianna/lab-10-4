import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import { AuthProvider } from "./context/AuthContext";

const Home = () => {
  return <h1>Home Page</h1>;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/blog"
            element={<BlogIndex />}
          />

          <Route
            path="/blog/:slug"
            element={<BlogPost />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;