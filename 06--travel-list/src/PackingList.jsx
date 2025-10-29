import initialItems from "../src/data";
import Item from "../src/Item";

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((initialItem) => (
          <Item
            key={initialItem.id}
            quantity={initialItem.quantity}
            description={initialItem.description}
            packed={initialItem.packed}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
