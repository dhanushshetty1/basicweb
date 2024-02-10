
document.addEventlistener("DOMcontentloaded",function(){
    const outputDiv=document.getElementById("output");
    fetch("database.json")
    .then(response=>response.json())
    .then(data=>{
        outputDiv.innerHTML=<h2>Student information</h2>;
        data.forEach(student=> {
            outputDiv.innerHTML+=`<p><strong>Name</strong>${student.studentname},<strong>USN</strong>${student.usn}</p>`;
        });
    })
    .catch(error=>{
        console.error("Errorfetching data:",error);
        outputDiv.innerHTML="<p>Error fetching data ,please try</p>";
    });
});
