
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const courses = [
    { id: 1234, title: 'CS1234 React JS', description: 'Full Stack software developer', image: '/images/cybertruck.jpg' },
    { id: 1235, title: 'CS1235 Node.js', description: 'Backend Development', image: '/images/Backend.jpg' },
    { id: 1236, title: 'CS1236 Python', description: 'Data Science with Python', image: '/images/Python.jpg' },
    { id: 1237, title: 'CS1237 Java', description: 'Object-Oriented Programming', image: '/images/java.png' },
    { id: 1238, title: 'CS1238 C#', description: 'Game Development with Unity', image: '/images/csharp.png' },
    { id: 1239, title: 'CS1239 SQL', description: 'Database Management', image: '/images/SQL.jpg' },
    { id: 1240, title: 'CS1240 HTML/CSS', description: 'Web Development', image: '/images/webdev.jpg' },
    // Add more courses as needed
  ];

  return (
    <div id="wd-dashboard" className="container">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {courses.map(course => (
          <div key={course.id} className="col">
            <div className="card h-100 rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course.id}/Home`}>
                <img src={course.image} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">{course.title}</h5>
                  <p className="wd-dashboard-course-description card-text">{course.description}</p>
                  <button className="btn btn-primary">Go</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
