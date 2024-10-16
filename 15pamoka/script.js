// document.getElementById("myButton").addEventListener("click", function () {
//     alert("Button clicked!");
//   });

document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById('pirmasMygtukas');
    const button2 = document.getElementById('antrasMygtukas');
    button1.addEventListener('click', () => {
        alert('Paspaudėte mygtuką su ID: pirmasMygtukas');
    });
    button2.addEventListener('click', () => {
        alert('Paspaudėte mygtuką su ID: antrasMygtukas');
    });
});  


// function greet(name) {
//     return "Hello, " + name + "!";
//   }
//   console.log(greet("Alice"));