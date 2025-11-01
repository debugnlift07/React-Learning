import "./App.css";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Status from "./Status";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems((items) => [...items, item]);
  };

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id != id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Status items={items} />
    </>
  );
}

export default App;
