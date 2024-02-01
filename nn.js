var myName = "Victor";

function first() {
  var a = "Hi!";
  console.log({ a } + { myName });
  second();
}

function second() {
  var b = "Hey!";
  console.log({ b } + { myName });
  third();
}

function third() {
  var c = "Hello!";
  console.log({ c } + { name });
}

first();

// hello victor

const x = { id: 4, name: "aaa" };

const y = { name: "aaa", id: 4 };

const compare = (ob1, ob2) => {};

console.log(compare(x, y));
