const students = [
  { name: "Salmaan Ahmed", marks: "38%", className: "3rd", address: "India" },
  { name: "Ranveer Singh", marks: "21%", className: "4th", address: "India" },
  { name: "Priya Sharma", marks: "20%", className: "5th", address: "India" },
  { name: "Shalini Singh", marks: "40%", className: "5th", address: "India" },
  { name: "Shriya Verma", marks: "45%", className: "6th", address: "India" },
  { name: "Rohit Sharma", marks: "50%", className: "6th", address: "India" },
  { name: "Rohini", marks: "80%", className: "6th", address: "India" },
  { name: "Riya", marks: "90%", className: "8th", address: "India" },
  { name: "Harsh Shukla", marks: "87%", className: "8th", address: "India" }
];

const cardsContainer = document.getElementById("student-cards");
const searchForm = document.querySelector("form");
const searchInput = document.querySelector('input[name="q"]');

function renderStudents(studentList) {
  cardsContainer.replaceChildren(
    ...studentList.map((student) => {
      const card = document.createElement("article");
      card.className = "card";

      card.innerHTML = `
        <p><span>Name:</span> ${student.name}</p>
        <p><span>Marks:</span> ${student.marks}</p>
        <p><span>Class:</span> ${student.className}</p>
        <p><span>Address:</span> ${student.address}</p>
      `;

      return card;
    })
  );
}

function filterStudents() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const matchingStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm)
  );

  renderStudents(matchingStudents);
}

searchInput.addEventListener("input", filterStudents);
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  filterStudents();
});

renderStudents(students);