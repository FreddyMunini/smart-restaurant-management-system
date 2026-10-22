import { useState } from "react";

function AdminDashboard() {

  const [orders] = useState([
    {
      id: 1,
      customer: "Freddy",
      status: "Preparing"
    }
  ]);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Orders</h3>

      {orders.map((order) => (
        <div key={order.id}>
          Order #{order.id}
          <br />
          Customer: {order.customer}
          <br />
          Status: {order.status}
          <hr />
        </div>
      ))}

      <h3>Analytics</h3>

      <p>Total Orders Today: 15</p>

      <p>Most Popular Item: Chicken Alfredo</p>
    </div>
  );
}

export default AdminDashboard;