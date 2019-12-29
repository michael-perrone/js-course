// the best way to visualize the DOM... tree or forest

// sorta like a heirarchy... you have one parent
// and that parent can have multiple or one child
// that parent can also have a parent
// almost like a family tree

console.log(window);

// window is the top of the DOM heirarchy

function alertThePage() {
  window.alert("AHHHHHH");
}

function refreshPage() {
  window.location.reload();
}

let ourH1 = document.getElementById("myh1");
function hideH1() {
  ourH1.hidden = !ourH1.hidden;
}

// Document object is different than document object model

console.log(window.document);
console.log(document);

// we are accessing an elements properties that is on the document object
// by giving the id that we chose in the html file

// document.bgColor = "red";

console.log(document.getElementById("myh1"));

document.getElementsByClassName("ourPTag")[4].innerHTML =
  "I have also been modiefied";
document.getElementsByClassName("ourPTag")[2].innerHTML =
  "I have been modified";
console.log(document.getElementsByTagName("button"));
// document.querySelector()
// document.querySelectorAll()

let whatIsQuerySelector = document.querySelector(".ourPTag");

whatIsQuerySelector.innerHTML = "which one changed";
// console.log(whatIsQuerySelector);

//console.log(document.querySelectorAll("p")[1]);
// console.log(document.getElementsByTagName("p")[1]);

let allPTags = document.getElementsByClassName("ourPTag");

//allPTags.length is the same thing as writing 5
// would now be 6 for allPTags.length

for (let i = 0; i < allPTags.length; i++) {
  console.log(allPTags[i]);
  console.log(i);
  allPTags[i].innerHTML = "We have all been modified";
  if (i === 2) {
    allPTags[i].innerHTML = "I HAVE BEEN MODIFIED BY MYSELF";
  }
  if (i === 5) {
    allPTags[i].innerHTML = "I HAVE ALSO BEEN MODIFIED BY MYSELF";
  }
}
