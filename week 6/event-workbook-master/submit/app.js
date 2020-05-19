// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

const form = document.getElementById("submit-me");

form.addEventListener("submit", (e)=>{
   const name = document.getElementById("first-name").value;
   const age = document.getElementById("age").value;
   const date = document.getElementById("date").value;
   const results = document.createElement("p");
   document.body.append(results);
   e.preventDefault()
   alert("Name: " + name + "  " + "Age: "+ age + "  " + "Date: " + date);
   
});
