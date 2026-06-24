import { useState } from "react";


export default function Booking(){


const params = new URLSearchParams(window.location.search);

const doctorName = params.get("doctor");



const [patient,setPatient]=useState({

name:"",
email:"",
phone:"",
message:""

});


const [status,setStatus]=useState("");



const submitAppointment = async()=>{


try{


const response = await fetch(

"http://localhost:5000/api/patients/add",

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

...patient,

doctor:doctorName

})

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


<div className="booking-container">



<div className="booking-left">


<h1>
Healthcare Made Simple
</h1>


<p>
Book an appointment with our expert doctors and get quality medical care.
</p>



<div className="booking-info">


<div>
🩺
<h3>
Expert Doctors
</h3>
<p>
Experienced specialists across multiple departments.
</p>
</div>



<div>
🏥
<h3>
Modern Facilities
</h3>
<p>
Advanced technology for better treatment.
</p>
</div>



<div>
⏰
<h3>
24/7 Support
</h3>
<p>
Emergency healthcare whenever you need.
</p>
</div>


</div>


</div>





<div className="booking-card">


<h2>
Book Your Appointment
</h2>



{
doctorName &&

<div className="selected-doctor">

Appointment with
<br/>

<strong>
{doctorName}
</strong>

</div>

}



<input

placeholder="Full Name"

onChange={(e)=>

setPatient({

...patient,

name:e.target.value

})

}

/>



<input

placeholder="Email Address"

onChange={(e)=>

setPatient({

...patient,

email:e.target.value

})

}

/>



<input

placeholder="Phone Number"

onChange={(e)=>

setPatient({

...patient,

phone:e.target.value

})

}

/>



<textarea

placeholder="Tell us your health concern"

onChange={(e)=>

setPatient({

...patient,

message:e.target.value

})

}

/>



<button onClick={submitAppointment}>

Confirm Appointment

</button>



<p className="success">

{status}

</p>



</div>




</div>


);


}