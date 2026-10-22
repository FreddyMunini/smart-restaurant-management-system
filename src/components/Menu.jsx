import menuData from "../data/menuData";

function Menu() {
  return (
    <div>
      <h2>Restaurant Menu</h2>

      {menuData.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>
            <strong>Category:</strong> {item.category}
          </p>

          <p>{item.description}</p>

          <p>
            <strong>Price:</strong> ${item.price}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Menu;