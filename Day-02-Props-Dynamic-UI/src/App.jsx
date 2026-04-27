import EmployeeCard from "./components/EmployeeCard";

function App(){
const employees =[
  {id:1,name:"Dnyaneshwar",role:"FrontEnd", salary:50000},
  {id:2,name:"Vaibhav",role:"Backend",salary:60000},
  {id:3,name:"Kiran",role:"Full Stack Developer",salary:80000}
];
return (
<div><h1>Employee List</h1>
{employees.map((emp)=>(
  <EmployeeCard
  key={emp.id}
  name={emp.name}
  role={emp.role}
  salary={emp.salary}
  />

))}
</div>
);

}
export default App;