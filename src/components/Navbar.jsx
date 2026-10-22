function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Student Portal
        </a>
        <div className="navbar-nav">
          <a className="nav-link active" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Students
          </a>
          <a className="nav-link" href="#">
            Courses
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar