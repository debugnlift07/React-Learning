import { useState } from "react";

function DatePage() {
  const [date, setDate] = useState(new Date());

  const handleStep = (steps) => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + steps);
      return newDate;
    });
  };

  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return (
    <div className="steps">
      <p>Today's Date: {new Date().toLocaleDateString()}</p>

      <div className="numbers">
        <div>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => handleStep(-1)}
          >
            -
          </button>
          <p>&nbsp;Step: 1&nbsp;</p>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={() => handleStep(1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="message">
        <p>
          Selected Date: {date.toLocaleDateString()} ({day}, {month} {year})
        </p>
      </div>
    </div>
  );
}

export default DatePage;
