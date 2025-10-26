function AppFooter() {
  const date = new Date();
  const hours = date.getHours();
  const isOpen = hours >= 10 && hours < 22; // open from 10 AM to 10 PM
  const formattedDate = date.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="footer">
      <p>{formattedDate}</p>
      <div className="order">
        <p>
          {isOpen
            ? "We're currently open 🍕 — come grab your slice!"
            : "Sorry, we're closed now. See you tomorrow!"}
        </p>
      </div>
      <button className="btn">Order</button>
    </footer>
  );
}

export default AppFooter;
