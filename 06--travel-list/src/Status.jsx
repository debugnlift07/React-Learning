function Status({ items }) {
  const noOfItems = items.length;
  const noPacked = items.filter((item) => item.packed).length;
  const percentage =
    noOfItems === 0 ? 0 : Math.round((noPacked / noOfItems) * 100);

  return (
    <em>
      {percentage === 100
        ? "You got everything! Ready 😁"
        : `😁 You have ${noOfItems} items on your list, and you already packed ${percentage}%`}
    </em>
  );
}

export default Status;
