// what is a method?
// basically a function that is a property of an object

let ourObject = {
  favoriteFood: "pizza",
  favoriteColor: "green",
  sayHello: function() {
    // this function is anonymous
    console.log("Hello");
  }
};

console.log(ourObject.favoriteFood);

// this keyword... were gonna cover this later

ourObject.sayHello();

let name = "mike";

let anotherObject = {
  introducePerson: function(person) {
    console.log("Hello I am " + person);
  }
};

anotherObject.introducePerson(name);

console.log(anotherObject.introducePerson);

// sayHello(); // NOPE NOT GONNA WORK // BAD
