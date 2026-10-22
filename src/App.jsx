import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Reservation from "./components/Reservation";
import Chatbot from "./components/Chatbot";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <div>
      <h1>Smart Restaurant Management System</h1>

      <Menu />
      <hr />

      <Cart />
      <hr />

      <Reservation />
      <hr />

      <Chatbot />
      <hr />

      <AdminDashboard />
    </div>
  );
}

export default App;