import { useEffect, useState } from "react";


export default function Admin(){


const [patients,setPatients]=useState([]);

const [doctors,setDoctors]=useState([]);




useEffect(()=>{


fetch("http://localhost:5000/api/patients/all")

.then(res=>res.json())

.then(data=>setPatients(data));



fetch("http://localhost:5000/api/doctors/all")

.then(res=>res.json())

.then(data=>setDoctors(data));



},[]);




return(


<div className="admin-page">



<h1>
SARA Hospitals Admin Dashboard
</h1>




<div className="dashboard-cards">


<div className="dashboard-card">

<h2>
👨‍⚕️
</h2>

<h3>
Doctors
</h3>

<p>
{doctors.length}
</p>

</div>




<div className="dashboard-card">

<h2>
🧑‍🤝‍🧑
</h2>

<h3>
Patients
</h3>

<p>
{patients.length}
</p>

</div>




<div className="dashboard-card">

<h2>
📅
</h2>

<h3>
Appointments
</h3>

<p>
{patients.length}
</p>

</div>


</div>





<section className="admin-section">


<h2>
Patient Appointments
</h2>



<div className="table-box">


<table>


<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Phone</th>

<th>Doctor</th>

<th>Problem</th>


</tr>

</thead>



<tbody>


{

patients.map((patient)=>(


<tr key={patient._id}>


<td>
{patient.name}
</td>


<td>
{patient.email}
</td>


<td>
{patient.phone}
</td>


<td>
{patient.doctor || "Not Selected"}
</td>


<td>
{patient.message}
</td>



</tr>


))


}



</tbody>


</table>


</div>


</section>






<section className="admin-section">


<h2>
Available Doctors
</h2>



<div className="doctor-admin-grid">


{

doctors.map((doctor)=>(


<div className="admin-doctor-card" key={doctor._id}>


<h3>
{doctor.name}
</h3>


<p>
{doctor.specialization}
</p>


<p>
Experience: {doctor.experience}
</p>


</div>


))


}


</div>


</section>




</div>


);


}