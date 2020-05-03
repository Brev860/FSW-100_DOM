const names = ["Jason", "Mike", "Miles", "Jeff", "Scott"];


for(i=0; i < names.length; i++){
const h1 = document.createElement("h1");
h1.textContent = names[i];
document.body.appendChild(h1);
h1.style.fontSize = 20;
h1.style.fontWeight = "lighter";
h1.style.fontFamily = "sans-serif";
h1.style.color = "cornflowerblue";
h1.classList = "border";
}


