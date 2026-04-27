import { useEffect, useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Loader from "./components/Loader";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Employee List</h1>

      {loading ? (
        <Loader />
      ) : (
        <div className="row">
          {employees.map((emp) => (
            <EmployeeCard key={emp.id} emp={emp} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;