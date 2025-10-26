import pizzas from "../src/data";

function Pizza() {
  return (
    <div className="pizza">
      <ul>
        {pizzas.map((pizza, index) => (
          <li
            key={index}
            className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}
          >
            <img src={`/${pizza.photoName}`} alt={pizza.name} />
            <div>
              <h3>{pizza.name}</h3>
              <p>{pizza.ingredients}</p>
              <span>{pizza.soldOut ? "❌ Sold Out" : "✅ Available"}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pizza;
