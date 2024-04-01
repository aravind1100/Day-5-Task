// Task-1
// Resume data in JSON format

const resume = {
  "name": "Aravind raj",
  "age": "25",
  "qualification": "B.E.Mechanical Engineering",
  "skills": ["HTML", "JAVASCRIPT", "CSS"],
};

//Task-2
// Iterate over using for loops ( for,for in,for of ,forEach)

// for loop :
let keys = Object.keys(resume);
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]} : ${resume[keys[i]]}`);
}

//for in loop :
for (let key in resume) {
  console.log(`${key} : ${resume[key]}`);
}

//for of loop :
// variable "keys" is declared in the beginning of program

for (let i of keys) {
  console.log(`${i} : ${resume[i]}`);
}

//forEach loop :
// variable "keys" is declared in the beginning of program

keys.forEach((element) => {
  console.log(`${element} : ${resume[element]}`);
});

//------------------------------------------------------------------------------------------------------------------
