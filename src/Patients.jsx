import { useEffect, useState } from "react";

export default function Patients() {

  const [patients, setPatients] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/patients/all")
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <div>

      <h1>Patient List</h1>

      {
        patients.map((patient) => (

          <div key={patient._id}>

            <h3>{patient.name}</h3>

            <p>Email: {patient.email}</p>

            <p>Phone: {patient.phone}</p>

            <p>
              Problem: {patient.message || "Not provided"}
            </p>

            <hr />

          </div>

        ))
      }

    </div>
  );
}