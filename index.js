const theButton=document.querySelector("button");
theButton.addEventListener("click",buttonAction);

function buttonAction(){
    alert("You clicked me")
}

const url="http://localhost:3001/persons";
let personsList;
fetch(url)
.then(res=>res.json())
.then(persons=>{
    personsList=persons;
    console.log("persons list inside of fetch: ",personsList);
})
.catch(e=>console.log(e));
console.log("persons list outside of fetch: ",personsList);
