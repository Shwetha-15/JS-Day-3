// document
document;

// fetch elements in 4 ways
// 1) child  2) tagname  3)class 4) id

// 1) child method
document.firstElementChild; //html
document.firstElementChild.firstElementChild; //head
document.firstElementChild.lastElementChild; // body
document.firstElementChild.lastElementChild.firstElementChild;  //h1
//h1 to heading
var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML="Welcome to NMIT";
heading.style.color="crimson";


// excercise - access list 3 =Third and make changes to word & color
document.firstElementChild.lastElementChild.children[5].lastElementChild;
var list3 = document.firstElementChild.lastElementChild.children[5].lastElementChild;
list3.style.color="cyan";
list3.innerHTML="Fourth";

// 2) tagename
// above is difficult traverse, hence use getElementsByTagName
document.getElementsByTagName("ul"); // an access any tag in html
document.getElementsByTagName("li");

// access list2 - second and change color to firstElementChild

document.getElementsByTagName("li")[1].style.color="brown";

// check length
document.getElementsByTagName("li").length;


// 3) class  ( can be more than one element eX: btn, btn, btn )
// getElementsbyClassName - even more simple
document.getElementsByClassName("btn");
document.getElementsByClassName("btn")[0].style.color="brown";


// 4) id
//getElementsbyId ( must be only single )

document.getElementById("title");
document.getElementById("title").innerHTML = "Welcome to NMIT"

// 5) document.querySelector
document.querySelector("h1");  // access h1
document.querySelector("#title"); // access h1 as it is ID so #
document.querySelector(".btn"); // access btn as it is class so .

document.querySelector("li a"); // access a tag in list li

// access a tag in body
document.querySelector("body a");


// multi selection via querySelector - NO- cannot be accessed

document.querySelector(".btn #title"); // null is output

// use querySelectorAll
document.querySelectorAll("#list .item");

document.querySelectorAll("#list .item")[2].style.color="brown";

// excercise: change list2 - second color - red
document.querySelectorAll("#list .item")[1].style.color="brown";

//excercise: change list1 - google to red
document.querySelector("li a").style.color="rbrowned";
// only bullet to blue
document.querySelector("li").style.color="cyan";

// change background of button
document.querySelector("button").style.backgroundColor="pink";

// convert h1 to italics
document.querySelector("h1").innerHTML = "<em>Good Morning</em>";