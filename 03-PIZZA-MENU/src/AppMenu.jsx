import Pizza from "./Pizza";
import pizzas from "../src/data";

function AppMenu() {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    </>
  );
}
export default AppMenu;
