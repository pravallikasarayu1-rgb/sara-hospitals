import { useState } from "react";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState("");

  const bookAppointment = () => {
    setMessage("Appointment request submitted successfully!");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">SARA Hospitals</div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Advanced Medical Care</h1>
          <p>World-class healthcare for every patient.</p>

          <button
            className="primary-btn"
            onClick={bookAppointment}
          >
            Book Appointment
          </button>

          {message && (
            <p style={{ marginTop: "20px" }}>
              {message}
            </p>
          )}
        </div>
      </section>
    </>
  );
}
