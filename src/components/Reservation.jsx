import { useState } from "react";

function Reservation() {
  const [message, setMessage] = useState("");

  const handleReservation = () => {
    setMessage("Reservation Confirmed!");
  };

  return (
    <div>
      <h2>Table Reservation</h2>

      <input type="date" />
      <br />
      <br />

      <input type="time" />
      <br />
      <br />

      <button onClick={handleReservation}>
        Book Table
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Reservation;