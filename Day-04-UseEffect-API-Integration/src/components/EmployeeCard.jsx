function EmployeeCard({ emp }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow-lg border-0 h-100">
        
        {/* Card Body */}
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">
            {emp.name}
          </h5>

          <p className="card-text mb-1">
            📧 <strong>Email:</strong> {emp.email}
          </p>

          <p className="card-text mb-1">
            🏢 <strong>Company:</strong> {emp.company.name}
          </p>

          <p className="card-text">
            📍 <strong>City:</strong> {emp.address.city}
          </p>
        </div>

        {/* Footer */}
        <div className="card-footer bg-white border-0">
          <button className="btn btn-outline-primary btn-sm w-100">
            View Profile
          </button>
        </div>

      </div>
    </div>
  );
}

export default EmployeeCard;