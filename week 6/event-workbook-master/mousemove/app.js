
const box = document.querySelector(".red-box");

  box.addEventListener("mousemove", (e)=> {
   const mouseLocation = document.createElement("p");
   document.body.append(mouseLocation);
    const x = e.clientX;
    const y = e.clientY;
    const locale = "x axis: " + x + ", y axis: " + y;
    box.innerHTML = locale;
  });

 