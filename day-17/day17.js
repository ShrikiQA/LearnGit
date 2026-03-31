console.log("Welcoem to Day 17");

// Id

let headelem = document.getElementById("heading");

console.log(headelem); // <h1 id="heading">Make sure are you happy</h1>


// Class Name

let infoelem = document.getElementsByClassName("info");

console.log(infoelem);

console.log(infoelem[0]); // <p class="info">info-1</p>
console.log(infoelem[1]); // <p class="info">info-2</p>

//For loop for class name.

[...infoelem].forEach((elem) => 
{
    console.log(elem); 
})
