import { useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <AdminDashboard onLogout={() => setIsLogin(false)} />
  ) : (
    <Login onLogin={() => setIsLogin(true)} />
  );
}

export default App;
