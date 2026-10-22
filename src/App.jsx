import { useState } from 'react'
import './App.css'
import Welcome from './components/welcome'
import StudentCard from './components/StudentCard'
import Navbar from './components/Navbar'

function App() {
  // Pop-up Modal ke liye state
  const [showModal, setShowModal] = useState(false)

  // Simple Pagination Page State
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      {/* 1. Top Navbar */}
      <Navbar />

      <Welcome />

      <div className="container">
        {/* 2. Blue Breadcrumb Strip (Teacher's Layout) */}
        <div className="breadcrumb-strip">
          Home / Students / <span className="breadcrumb-item active">Directory</span>
        </div>

        {/* 3. Page Header Section with Non-functional Search Box */}
        <div className="page-header-bar d-flex justify-content-between align-items-center my-3">
          <h2>Page Header</h2>

          <div className="d-flex gap-2">
            {/* Simple Visual Search Box */}
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search student..." 
              style={{ width: '200px' }}
              readOnly
            />

            <button 
              className="btn-add-student btn btn-primary" 
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add New Student
            </button>
          </div>
        </div>

        {/* 4. Student Cards Grid */}
        <div className="cards">
          <StudentCard
            id="101"
            name="Bisma"
            program="BSSE"
            semester="5"
            gpa="3.8"
          />
          <StudentCard
            id="102"
            name="Habiba"
            program="BSSE"
            semester="5"
            gpa="3.8"
          />
          <StudentCard
            id="103"
            name="konain"
            program="BSSE"
            semester="5"
            gpa="3.8"
          />
          <StudentCard
            id="104"
            name="haya"
            program="BSSE"
            semester="5"
            gpa="3.8"
          />
        </div>

        {/* 5. Basic Pagination Buttons */}
        <div className="d-flex justify-content-center my-4">
          <button 
            type="button" 
            className="btn btn-outline-primary mx-1"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          <button 
            type="button" 
            className={currentPage === 1 ? "btn btn-primary mx-1" : "btn btn-outline-primary mx-1"}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>

          <button 
            type="button" 
            className={currentPage === 2 ? "btn btn-primary mx-1" : "btn btn-outline-primary mx-1"}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>

          <button 
            type="button" 
            className={currentPage === 3 ? "btn btn-primary mx-1" : "btn btn-outline-primary mx-1"}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>

          <button 
            type="button" 
            className="btn btn-outline-primary mx-1"
            disabled={currentPage === 3}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>

        {/* 6. Alert Banner */}
        <div className="alert-banner">
          <span>Student records have been successfully updated.</span>
          <span className="close-alert">×</span>
        </div>
      </div>

      {/* Pop-up Modal UI */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Add New Student</h3>
            <p>Enter details for the new student:</p>
            <input type="text" placeholder="Student Name" className="modal-input" />
            <input type="text" placeholder="Program (e.g. BSSE)" className="modal-input" />
            <div className="modal-actions">
              <button className="btn-close" type="button" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-save" type="button" onClick={() => setShowModal(false)}>Save Student</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App