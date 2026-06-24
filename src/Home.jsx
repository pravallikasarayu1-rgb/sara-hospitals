import { useState } from "react";


export default function Home(){


const [patient,setPatient]=useState({

name:"",
email:"",
phone:"",
message:""

});


const [status,setStatus]=useState("");



const submit = async()=>{


try{


const response = await fetch(

"http://localhost:5000/api/patients/add",

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(patient)

}

);



const data = await response.json();

setStatus(data.message);


}


catch(error){

setStatus("Server connection failed");

}


};



return(

<div>



<section className="hero">


<div className="hero-content">


<h1>
SARA Hospitals
</h1>


<h2>
Advanced Medical Care For Every Family
</h2>


<p>
Trusted doctors, modern technology and compassionate healthcare.
</p>


<button>
Emergency: 1800-123-456
</button>


</div>


</section>





<section className="about">


<h1>
Why Choose SARA Hospitals?
</h1>



<div className="cards">


<div className="card">

<h2>
🏥 Modern Facilities
</h2>

<p>
Advanced equipment and world-class infrastructure.
</p>

</div>



<div className="card">

<h2>
👨‍⚕️ Expert Doctors
</h2>

<p>
Highly experienced specialists across departments.
</p>

</div>




<div className="card">

<h2>
❤️ Patient First
</h2>

<p>
Quality care with compassion and dedication.
</p>

</div>


</div>


</section>







<section className="services">


<h1>
Our Departments
</h1>


<div className="cards">


<div className="card">
<h2>❤️ Cardiology</h2>
<p>Complete heart care solutions.</p>
</div>


<div className="card">
<h2>🧠 Neurology</h2>
<p>Advanced brain and nerve treatments.</p>
</div>


<div className="card">
<h2>🦴 Orthopedics</h2>
<p>Bone and joint specialist care.</p>
</div>


<div className="card">
<h2>👶 Pediatrics</h2>
<p>Healthcare for children.</p>
</div>


</div>


</section>







<section className="reviews">


<h1>
Patient Reviews
</h1>


<div className="cards">


<div className="card">

<p>
"Excellent doctors and very caring staff."
</p>

<h3>
- Rahul
</h3>

</div>



<div className="card">

<p>
"Clean hospital with modern facilities."
</p>

<h3>
- Priya
</h3>

</div>



<div className="card">

<p>
"Best healthcare experience."
</p>

<h3>
- Arjun
</h3>

</div>


</div>


</section>







<section className="appointment">


<h1>
Book Appointment
</h1>



<input

placeholder="Patient Name"

onChange={(e)=>

setPatient({

...patient,

name:e.target.value

})

}

/>




<input

placeholder="Email"

onChange={(e)=>

setPatient({

...patient,

email:e.target.value

})

}

/>




<input

placeholder="Phone"

onChange={(e)=>

setPatient({

...patient,

phone:e.target.value

})

}

/>




<textarea

placeholder="Health Problem"

onChange={(e)=>

setPatient({

...patient,

message:e.target.value

})

}

/>



<button onClick={submit}>

Submit

</button>


<h3>
{status}
</h3>


</section>







<section className="contact">


<h1>
Contact Us
</h1>


<p>
📍 SARA Hospitals, Main City Road
</p>


<p>
📞 Emergency: 1800-123-456
</p>


<p>
✉️ support@sarahospitals.com
</p>


</section>






<footer>

<h2>
SARA Hospitals
</h2>


<p>
24/7 Healthcare | Expert Doctors | Trusted Treatment
</p>


<p>
© 2026 SARA Hospitals
</p>


</footer>



</div>


);


}