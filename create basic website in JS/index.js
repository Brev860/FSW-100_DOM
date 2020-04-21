var body = document.querySelector("body");
var h1 = document.createElement("h1");
h1.textContent = "My WebSite Created In JS";
body.appendChild(h1);

var nav = document.createElement("nav");
body.appendChild(nav);


var anchor1 = document.createElement("a");
anchor1.setAttribute("href", "/HTML");
var aText1 = document.createTextNode("  HOME  ");
anchor1.appendChild(aText1);
nav.appendChild(anchor1);

var anchor2 = document.createElement("a");
anchor2.setAttribute("href", "/HTML");
var aText2 = document.createTextNode("  ABOUT  ");
anchor2.appendChild(aText2);
nav.appendChild(anchor2);

var anchor3 = document.createElement("a");
anchor3.setAttribute("href", "/HTML");
var aText3 = document.createTextNode("  CONTACT  ");
anchor3.appendChild(aText3);
nav.appendChild(anchor3);

 var p = document.createElement("p");
 p.textContent = "This paragraph was created using JS. Not tags were created in the html file for this site.";
 body.appendChild(p);

 var listItems = ["item1", "item2", "item3", "item4"];

 var orderList = document.createElement("ol");
 body.appendChild(orderList);

for ( i = 0; i < listItems.length;i++){
    var list = document.createElement("li");
    list.textContent = listItems[i];
    orderList.append(list);
}

var footer = document.createElement("footer");
footer.textContent = "Footer goes here...."
body.appendChild(footer)


