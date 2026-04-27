import { useState } from "react";

function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success", data);
        alert("Employee Added Successfully ✅");

        setFormData({
          name: "",
          email: "",
          role: ""
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow-lg border-0">
            <div className="card-body">
              
              <h3 className="text-center mb-4 text-primary">
                Add Employee
              </h3>

              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Role */}
                <div className="mb-4">
                  <label className="form-label">Role</label>
                  <select
                    name="role"
                    className="form-select"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                  </select>
                </div>

                {/* Button */}
                <div className="d-grid">
                  <button className="btn btn-primary btn-lg">
                    Submit
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddEmployee;