var box = document.createElement("h1");
box.classList = "square";
box.style.border = "black";
box.style.borderStyle = "solid";
document.body.append(box);

box.addEventListener("mousedown", function(){
    box.style.backgroundColor = "red";
});
box.addEventListener("mouseover", function(){
    box.style.backgroundColor = "blue";
});
box.addEventListener("mouseup", function(){
    box.style.backgroundColor = "yellow";
});
box.addEventListener("dlbclick", function(){
    box.style.backgroundColor = "green";
});
box.addEventListener("wheel", function(){
    box.style.backgroundColor = "orange";
});



box.addEventListener("keydown", function(event) {
    if (event.keyCode == 114) {
     box.style.backgroundColor = "red";
    }
});

