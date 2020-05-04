var button = document.getElementById("add");
button.addEventListener("click", function() {
   const num1 = parseInt(document.getElementById("value1").value);
   const num2 = parseInt(document.getElementById("value2").value);
   const op = document.getElementById("operator").value;
   let calc1 ;

     if(op == "add"){
     calc1 = num1 + num2;

     }
  document.getElementById("sum").textContent = calc1;
});

var button2 = document.getElementById("sub");
button2.addEventListener("click", function() {
   const num3 = parseInt(document.getElementById("value3").value);
   const num4 = parseInt(document.getElementById("value4").value);
   const op2 = document.getElementById("operator2").value;
   let calc2 ;

     if(op2 == "sub"){
     calc2 = num3 - num4;

     }
  document.getElementById("sum2").textContent = calc2;
});

var button3 = document.getElementById("mult");
button3.addEventListener("click", function() {
   const num5 = parseInt(document.getElementById("value5").value);
   const num6 = parseInt(document.getElementById("value6").value);
   const op3 = document.getElementById("operator3").value;
   let calc3 ;

     if(op3 == "mult"){

     calc3 = num5 * num6;

     }
  document.getElementById("sum3").textContent = calc3;
});

const addColor1 = document.getElementById("color1");
addColor1.style.backgroundColor = "red";
const addColor2 = document.getElementById("color2");
addColor2.style.backgroundColor = "yellow";
const addColor3 = document.getElementById("color3");
addColor3.style.backgroundColor = "green";