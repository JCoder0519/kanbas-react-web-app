export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      <label htmlFor="wd-description"></label>
      <textarea id="wd-description" style={{ height: "10px", width: "400px" }}>
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include 
        the following: Your full name and section, links to each of the lab assignments, 
        link to the Kanbas application, and links to all relevant source code repositories.
      </textarea>
      <br /><br />


      <p>

      </p>

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>


          <p>
        
          </p>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
                {/* Add more groups if necessary */}
              </select>
            </td>
          </tr>

          <p>
        
          </p>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-grade-display">Display Grade as</label>
            </td>
            <td>
              <select id="wd-grade-display">
                <option value="percentage">Percentage</option>
                <option value="points">Points</option>
              </select>
            </td>
          </tr>

          <p>
        
          </p>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>

            
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="in-person">On Paper</option>
                <option value="no-submission">No Submission</option>

              </select>

              <p>

              </p>

              <div>
                <label>Online Entry Options</label><br />
                <input type="checkbox" id="wd-text-entry" /> Text Entry<br />
                <input type="checkbox" id="wd-website-url" /> Website URL<br />
                <input type="checkbox" id="wd-media-recordings" /> Media Recordings<br />
                <input type="checkbox" id="wd-student-annotation" /> Student Annotation<br />
                <input type="checkbox" id="wd-file-uploads" /> File Uploads
              </div>
            </td>
          </tr>

          <p>

          </p>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            
            <td>
              <select id="wd-assign-to">
                <option value="everyone">Everyone</option>
                <option value="individual">Individual</option>
                <option value="section">Section</option>
                <option value="group">Group</option>

              </select>
            </td>
          </tr>

          <p>

          </p>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </td>
          </tr>

          <p>

          </p>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
            </td>
          
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" defaultValue="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>

      <br />

      <hr /> 
      

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button id="wd-cancel">Cancel</button>
        <button id="wd-save">Save</button>
      </div>
    </div>
  );
}
  