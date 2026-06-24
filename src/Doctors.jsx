import { useEffect, useState } from "react";


export default function Doctors(){


const [doctors,setDoctors]=useState([]);



useEffect(()=>{

fetch("http://localhost:5000/api/doctors/all")

.then(res=>res.json())

.then(data=>setDoctors(data));


},[]);



return(


<div className="doctors-page">


<h1>
Our Expert Doctors
</h1>


<p className="doctor-subtitle">
Experienced specialists providing trusted medical care.
</p>



<div className="doctor-grid">


{

doctors.map((doctor)=>(


<div className="doctor-card" key={doctor._id}>


<div className="doctor-image">
👨‍⚕️
</div>



<h2>
{doctor.name}
</h2>


<h3>
{doctor.specialization}
</h3>


<p>
Experience: {doctor.experience}
</p>


<p>
📞 {doctor.phone}
</p>



<button

onClick={()=>{

window.location.href =
`/booking?doctor=${doctor.name}`

}}

>

Book Appointment

</button>



</div>


))

}



</div>


</div>


);

}