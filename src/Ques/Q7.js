import React from "react";

const students = [
  {
    id: 1,
    name: "John Smith",
    grade: "A",
    attendance: "Present"
  },
  {
    id: 2,
    name: "Jane Doe",
    grade: "B",
    attendance: "Absent"
  },
  {
    id: 3,
    name: "Tom Brown",
    grade: "C",
    attendance: "Present"
  },
  {
    id: 4,
    name: "Mary Johnson",
    grade: "A",
    attendance: "Present"
  },
  {
    id: 5,
    name: "Jack Wilson",
    grade: "B",
    attendance: "Present"
  },
  {
    id: 6,
    name: "Samantha Lee",
    grade: "C",
    attendance: "Absent"
  },
  {
    id: 7,
    name: "Harry Patel",
    grade: "A",
    attendance: "Present"
  },
  {
    id: 8,
    name: "Natalie Kim",
    grade: "B",
    attendance: "Present"
  },
  {
    id: 9,
    name: "Tyler Garcia",
    grade: "C",
    attendance: "Absent"
  },
  {
    id: 10,
    name: "Sophie Chen",
    grade: "A",
    attendance: "Present"
  }
];

export default function App() {
  return (
    <div>
      <h2>Question 7</h2>
      <div class="class-list">
        <h1>Class List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Attendance</th>
            </tr>
          </thead>
          {students.map((student, index) => (
            <tbody
              style={{
                color: student.attendance === "Absent" && "red",
                backgroundColor: index % 2 == 0 ? "#ecfccb" : "#d9f99d"
              }}
            >
              <td>{student.name}</td>
              <td
                style={{
                  backgroundColor: student.grade == "A" && "Green"
                }}
              >
                {student.grade}
                {student.grade == "A" && (
                  <p style={{ color: "darkblue" }}>congratulation</p>
                )}
                {student.grade == "C" && (
                  <span style={{ color: "darkred" }}> ( Fail ) </span>
                )}
              </td>
              <td>{student.attendance}</td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
