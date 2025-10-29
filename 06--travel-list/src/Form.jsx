import { useState } from "react";

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  };
  return (
    <>
      <form className="add-from" onSubmit={handleSubmit}>
        <h3>What do you need for your trip?:)😊</h3>
        <select value={quantity}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option
              key={num}
              value={num}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
    </>
  );
}

export default Form;
