import React from 'react';

// Define the types for the props
type Assignment = {
  id: number;
  title: string;
  modules: string;
  availability: string;
  due: string;
  points: string;
};

type AssignmentEditorProps = {
  assignment: Assignment;
  onCancel: () => void;
};

export default function AssignmentEditor({ assignment, onCancel }: AssignmentEditorProps) {
  return (
    <div className="container mt-4">
      

      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
        <input type="text" className="form-control" id="assignmentName" defaultValue="A1" />
      </div>

      {/* Assignment Description */}
      <div className="mb-3">
        <label htmlFor="assignmentDescription" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="assignmentDescription"
          rows={13}
          defaultValue={`
            The assignment is available online. 

            Submit a link to the landing page of your Web application running on Netlify. 
            The landing page should include the following:

            - Your full name and section
            - Links to each of the lab assignments
            - Link to the Kanbas application
            - Links to all relevant source code repositories.
            
            THE Kanbas application should include a link to navigate back to the landing page.
          `}
        />
      </div>

      {/* Points and Assignment Group */}
      <div className="row mb-3">
        <div className="col-md-2">
          <label htmlFor="points" className="form-label">Points</label>
          <input type="number" className="form-control" id="points" defaultValue={100} />
        </div>

        <div className="col-md-4">
          <label htmlFor="assignmentGroup" className="form-label">Assignment Group</label>
          <select className="form-select" id="assignmentGroup">
            <option value="assignments">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      {/* Display Grade As and Submission Type */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="gradeDisplay" className="form-label">Display Grade as</label>
          <select className="form-select" id="gradeDisplay">
            <option value="percentage">Percentage</option>
            <option value="points">Points</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="submissionType" className="form-label">Submission Type</label>
          <select className="form-select" id="submissionType">
            <option value="online">Online</option>
            <option value="in-person">On Paper</option>
            <option value="no-submission">No Submission</option>
          </select>
        </div>
      </div>

      {/* Online Entry Options */}
      <div className="mb-3">
        <label className="form-label">Online Entry Options</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="textEntry" />
          <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="websiteUrl" defaultChecked />
          <label className="form-check-label" htmlFor="websiteUrl">Website URL</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="mediaRecordings" />
          <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="studentAnnotation" />
          <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="fileUploads" />
          <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
        </div>
      </div>

      {/* Assign To */}
      <div className="mb-3">
        <label htmlFor="assignTo" className="form-label">Assign to</label>
        <select className="form-select" id="assignTo">
          <option value="everyone">Everyone</option>
          <option value="individual">Individual</option>
          <option value="section">Section</option>
          <option value="group">Group</option>
        </select>
      </div>

      {/* Due Date and Available From */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label htmlFor="dueDate" className="form-label">Due</label>
          <input type="datetime-local" className="form-control" id="dueDate" defaultValue="2024-05-13T23:59" />
        </div>

        <div className="col-md-4">
          <label htmlFor="availableFrom" className="form-label">Available From</label>
          <input type="datetime-local" className="form-control" id="availableFrom" defaultValue="2024-05-06T00:00" />
        </div>

        <div className="col-md-4">
          <label htmlFor="availableUntil" className="form-label">Until</label>
          <input type="datetime-local" className="form-control" id="availableUntil" defaultValue="2024-05-20T00:00" />
        </div>
      </div>

      {/* Cancel and Save Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}