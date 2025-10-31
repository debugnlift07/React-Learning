function Item({
  id,
  quantity,
  description,
  packed,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={Item.packed}
        onChange={() => {
          onToggleItem(id);
        }}
      ></input>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>
        <span style={{ color: "red" }} onClick={() => onDeleteItem(id)}>
          X
        </span>
      </button>
    </li>
  );
}

export default Item;
