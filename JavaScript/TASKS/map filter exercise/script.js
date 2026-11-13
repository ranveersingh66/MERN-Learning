const studentData = [
  {
    StudentName: "Salmaan Ahmed",
    Marks: "38%",
    Class: "3rd",
    Address: "India"
  }
]

const info = studentData
.map((data) =>{
  return `<li>${data.StudentName}</li>`
})
console.log(info);
const div = document.getElementById('card-1');
div.innerHTML = `<ul>${info.join('')}</ul>`


//   {
//     StudentName: "Salmaan Ahmed",
//     Marks: "38%",
//     Class: "3rd",
//     Address: "India"
//   },
//   {
//     StudentName: "Salmaan Ahmed",
//     Marks: "38%",
//     Class: "3rd",
//     Address: "India"
//   },
//   {
//     StudentName: "Salmaan Ahmed",
//     Marks: "38%",
//     Class: "3rd",
//     Address: "India"
//   },
//   {
//     StudentName: "Salmaan Ahmed",
//     Marks: "38%",
//     Class: "3rd",
//     Address: "India"
//   },
//   {
//     StudentName: "Salmaan Ahmed",
//     Marks: "38%",
//     Class: "3rd",
//     Address: "India"
//   },
//   {
//     StudentName: "Salmaan Ahmed",
//     Marks: "38%",
//     Class: "3rd",
//     Address: "India"
//   },
//   {
//     StudentName: "Salmaan Ahmed",
//     Marks: "38%",
//     Class: "3rd",
//     Address: "India"
//   },
//   {
//     StudentName: "Salmaan Ahmed",
//     Marks: "38%",
//     Class: "3rd",
//     Address: "India"
//   },
// ]