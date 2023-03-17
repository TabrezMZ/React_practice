const employees = [
  { id: 1, name: "John Doe", department: "Marketing", salary: 50000 },
  { id: 2, name: "Jane Smith", department: "Sales", salary: 60000 },
  { id: 3, name: "Bob Johnson", department: "Engineering", salary: 75000 },
  { id: 4, name: "Sara Lee", department: "Human Resources", salary: 45000 }
];

export default function App() {
  return (
    <div className="App">
      <h2>Question 4</h2>
      <body>
        <h1>Employee Information</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </div>
  );
}
