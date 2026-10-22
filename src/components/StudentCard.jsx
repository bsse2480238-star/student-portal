import { useState } from 'react'

function StudentCard({ id, name, program, semester, gpa }) {

  const [views, setViews] = useState(0)
  const [showDetails, setShowDetails] = useState(false)

  function handleView() {
    setViews(views + 1)
  }

  return (
    <div className="student-card">

      {/* Standard Head & Shoulder Avatar Box */}
      <div className="image-placeholder" style={{ backgroundColor: '#e9ecef', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
        <svg width="80" height="80" viewBox="0 0 24 24" fill="#6c757d">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>

      <div className="card-body">
        <h2>{name}</h2>

        {/* ID display */}
        {id && <p><strong>ID:</strong> {id}</p>}

        <p><strong>Major:</strong> {program}</p>

        <p><strong>Semester:</strong> {semester}</p>

        {/* GPA display */}
        {gpa && <p><strong>GPA:</strong> {gpa}</p>}

        <p>Profile Views: {views}</p>

        <div className="card-buttons">
          {/* View Profile Button */}
          <button type="button" onClick={handleView}>
            View Profile
          </button>

          {/* Dummy Delete Button */}
          <button type="button" className="btn-delete">
            Delete
          </button>

          {/* Details Toggle Button */}
          <button type="button" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {/* Details Section */}
        {showDetails && (
          <div>
            <p>Email: student@example.com</p>
            <p>Phone: 0300-1234567</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default StudentCard