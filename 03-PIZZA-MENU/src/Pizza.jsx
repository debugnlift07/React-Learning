function Pizza(props) {
  return (
    <div className="pizza">
      <ul>
        {
          <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img
              src={`/${props.pizzaObj.photoName}`}
              alt={props.pizzaObj.name}
            />
            <div>
              <h3>{props.pizzaObj.name}</h3>
              <p>{props.pizzaObj.ingredients}</p>
              <p>{props.pizzaObj.price}</p>
              <span>
                {props.pizzaObj.soldOut ? "❌ Sold Out" : "✅ Available "}
              </span>
            </div>
          </li>
        }
      </ul>
    </div>
  );
}

export default Pizza;
