function StudentCard(cardId, student) {
  const card = document.getElementById(cardId);

  card.innerHTML = `
    <ul>
      Name: ${student.StudentName}<br>
      Marks: ${student.Marks}<br>
      Class: ${student.Class}<br>
      Address: ${student.Address}
    </ul>
  `;
}

StudentCard("card-1", {
  StudentName: "Salmaan Ahmed",
  Marks: "38%",
  Class: "3rd",
  Address: "India"
});

StudentCard("card-2", {
  StudentName: "Ranveer Singh",
  Marks: "21%",
  Class: "4th",
  Address: "India"
});

StudentCard("card-3", {
  StudentName: "Priya Sharma",
  Marks: "20%",
  Class: "5th",
  Address: "India"
});

StudentCard("card-4", {
  StudentName: "Shalini Singh",
  Marks: "40%",
  Class: "5th",
  Address: "India"
})

StudentCard("card-5", {
  StudentName: "Shriya verma",
  Marks: "45%",
  Class: "6th",
  Address: "India"
})

StudentCard("card-6", {
  StudentName: "Rohit Sharma",
  Marks: "50%",
  Class: "6th",
  Address: "India"
})

StudentCard("card-7", {
  StudentName: "rohini",
  Marks: "80%",
  Class: "6th",
  Address: "India"
})

StudentCard("card-8", {
  StudentName: "Riya ",
  Marks: "90%",
  Class: "8th",
  Address: "India"
})

StudentCard("card-9", {
  StudentName: "Harsh shukla",
  Marks: "87%",
  Class: "8th",
  Address: "India"
})