/*Creati cate 2 exemple pentru mostenire si compozitie folosindu-va de domeniul vostru de 
activitate sau unul preferat. (puteti folosi orice referinta).*/

function Movies() {
  this.title = "";
  this.length = 0;
  this.genre = "";
}

function Cast(settings) {
  Movies.call(this);
  const { name, age, awards, title, length, genre } = settings;
  this.name = name;
  this.age = age;
  this.awards = awards;
  this.title = title;
  this.length = length;
  this.genre = genre;
}
Cast.prototype = Object.create(Movies.prototype);

var actor1 = new Cast({
  name: "Leonardo DiCaprio",
  age: 48,
  awards: 1,
  title: "The Revenant",
  length: 160,
  genre: "drama",
});

var actor2 = new Cast({
  name: "Margot Robbie",
  age: 32,
  awards: 0,
  title: "I, Tonya",
  length: 150,
  genre: "biopic",
});

console.log(actor1, actor2);
/*
Creati cate o functie si apelarea sa pentru urmatoarele cazuri (pentru a intelege):
  - cate o functie care primeste cate un parametru: integer, string, object, array, callback
*/
function intFunction(int) {
  var int = 11;
  return int;
}
console.log(intFunction());

function strFunction(string) {
  string = "String";
  return string;
}
console.log(strFunction());

function obFunction(ob) {
  ob = {
    name: "object",
    index: 2,
  };
  return ob.name + " " + ob.index;
}
console.log(obFunction());

function arrFunction(arr) {
  arr = [1, 2, 3];
  return arr;
}
console.log(arrFunction());

function cbFunction1(cb) {
  console.log(`This is a ${cb}`);
}
function cbFunction2(callback) {
  const cb = "CALLBACK";
  callback(cb);
}
cbFunction2(cbFunction1);

/*
  - cateva exemple si cu combinatii, unde trimiteti mai multi parametrii de mai multe tipuri
*/
function multiplePar(int, str, ob, arr) {
  int = 12;
  str = "String2";
  ob = {
    name: "objName",
  };
  arr = [1, 2, 3];
  return int + " " + str + " " + ob.name + " " + arr;
}
console.log(multiplePar());

/*generati un callback hell (optional)*/

/*
  - o functie care accepta un numar nedefinit de argumente care returneaza suma lor*/

const sumOfNumbers = (...numbers) => {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};
console.log(sumOfNumbers(1, 2, 3, 4, 5));

/*
o functie care accepta un boolean si retuneaza un promise, resolve  cu o valoare daca
 booleanul este true si rejected daca este false cu alta valoare, prindeti ce returneaza 
 functia si afisati cu console.log valoarea */

const fctPromise = new Promise((resolve, reject) => {
  const bool = true;
  if (!bool) {
    resolve("false");
  } else {
    reject(new Error("true"));
  }
});
console.log(fctPromise);
