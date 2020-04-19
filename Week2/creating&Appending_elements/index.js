
var header= document.createElement("h1");
header.textContent = "Welcome to my JS site";
var headerText = document.getElementById("welcome");
headerText.append(header);

var paragraph = document.createElement("p");
paragraph.textContent = "All of this was created with JavaScript";
var paragraphText = document.getElementById("paragraph");
paragraphText.append(paragraph);

var orderedList1 = document.createElement("li");
orderedList1.textContent = "item1";
var listItems1 = document.getElementById("list");
listItems1.append(orderedList1);

var orderedList2 = document.createElement("li");
orderedList2.textContent = "item2";
var listItems2 = document.getElementById("list");
listItems2.append(orderedList2);

var orderedList3 = document.createElement("li");
orderedList3.textContent = "item3";
var listItems3 = document.getElementById("list");
listItems3.append(orderedList3);