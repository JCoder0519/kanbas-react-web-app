import React, { useState } from 'react';
import { FaPlus, FaCheck, FaEllipsisV, FaSearch } from 'react-icons/fa';
import './Assignments.css';
import AssignmentEditor from './Editor'; // Import the editor component

type Assignment = {
  id: number;
  title: string;
  modules: string;
  availability: string;
  due: string;
  points: string;
};

export default function Assignments() {
  const assignments: Assignment[] = [
    { id: 1, title: 'A1', modules: 'Multiple Modules', availability: 'Not available until May 6 at 12:00am', due: 'Due May 13 at 11:59pm', points: '100 pts' },
    { id: 2, title: 'A2', modules: 'Multiple Modules', availability: 'Not available until May 13 at 12:00am', due: 'Due May 20 at 11:59pm', points: '100 pts' },
    { id: 3, title: 'A3', modules: 'Multiple Modules', availability: 'Not available until May 20 at 12:00am', due: 'Due May 27 at 11:59pm', points: '100 pts' },
  ];

  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null); // Track the selected assignment
  const [isEditing, setIsEditing] = useState(false); // Track whether the editor is open

  const handleEditClick = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setIsEditing(true); // Open the editor
  };

  const handleCancel = () => {
    setIsEditing(false); // Close the editor
  };

  return (
    <div className="container mt-4">
      {/* Conditional Rendering for Editor */}
      {isEditing && selectedAssignment ? (
        <AssignmentEditor
          assignment={selectedAssignment}
          onCancel={handleCancel}
        />
      ) : (
        <>
          {/* Search bar and buttons */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="input-group" style={{ width: '300px' }}>
              <span className="input-group-text bg-white">
                <FaSearch />
              </span>
              <input id="wd-search-assignment" placeholder="Search..." className="form-control" />
            </div>
            <div>
              <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2">
                <FaPlus /> Group
              </button>
              <button id="wd-add-assignment" className="btn btn-danger">
                <FaPlus /> Assignment
              </button>
            </div>
          </div>

          {/* Assignment list header */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 id="wd-assignments-title" className="fw-bold mb-0">ASSIGNMENTS</h5>
            <div>
              <span className="me-2">40% of Total</span>
              <button className="btn btn-sm btn-outline-secondary">
                <FaEllipsisV />
              </button>
            </div>
          </div>

          {/* Assignment List */}
          <ul id="wd-assignment-list" className="list-group">
            {assignments.map((assignment) => (
              <li key={assignment.id} className="list-group-item d-flex justify-content-between align-items-start p-3">
                <div className="border-start border-3 border-success ps-3">
                  <h6 className="fw-bold mb-1">{assignment.title}</h6>
                  <p className="mb-1">
                    <span className="text-danger">{assignment.modules}</span> | {assignment.availability} | {assignment.points}
                  </p>
                  <small className="text-muted">{assignment.due}</small>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheck className="text-success me-3" />
                  {/* Clicking this button will open the AssignmentEditor */}
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => handleEditClick(assignment)}>
                    <FaEllipsisV />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
