function EmployeeCard({ name, role, salary }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      borderRadius: "10px",
      width: "200px"
    }}>
      <h3>{name}</h3>
      <p>Role: {role}</p>
      <p>Salary: ₹{salary}</p>
    </div>
  );
}

export default EmployeeCard;