const students = [
  {name: "Ranveer", age: 20, grade: "A"},
  {name: "Priya", age: 22, grade: "B"},
  {name: "Amit", age: 19, grade: "A"},
  {name: "Sneha", age: 21, grade: "C"},
  {name: "Rohit", age: 23, grade: "B"}
] 

// Using filter method to get students with age less than 21
let filteredStudents = students.filter((data) => data.age < 21)
console.log(filteredStudents); 

// Using for loop to filter students with age less than 21
const newArr = [];
for(let i=0; i<students.length; i++){
  if(students[i].age < 21){
    newArr.push(students[i]);
  }
}
console.log(newArr);

// Using filter and map method to get the names of students with grade "B"
const top = students
.filter((data) => data.grade === "B")
.map((data) => {
  return data.name
})
console.log(top);