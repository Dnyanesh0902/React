function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
      <div className="text-center">
        
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>

        <p className="mt-3 fw-bold">Loading employees...</p>
      </div>
    </div>
  );
}

export default Loader;