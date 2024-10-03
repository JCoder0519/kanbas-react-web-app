import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";


export default function Modules() {
    return (
      <div>
  <ModulesControls /><br /><br /><br /><br />
  <ul className="list-group rounded-0">
    <li className="wd-module list-group-item p-0
                   mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
           Week 1 </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item">
          LESSON 1.1 </li>
          <LessonControlButtons />
        <li className="wd-lesson list-group-item">
          LESSON 1.2 </li>
          <LessonControlButtons />
        <li className="wd-lesson list-group-item">
          LESSON 1.3 </li>
          <LessonControlButtons />
      </ul>
    </li>
    <li className="wd-module list-group-item p-0
                 mb-5 fs-5 border-gray">
    <div className="wd-title p-3 ps-2 bg-secondary">
         Week 2 </div>
    <ul className="wd-lessons list-group rounded-0">
      <li className="wd-lesson list-group-item">
        LEARNING OBJECTIVES </li>
      <li className="wd-lesson list-group-item">
        LESSON 1 </li>
      <li className="wd-lesson list-group-item">
        LESSON 2 </li>
    </ul>
  </li>
</ul> </div>

  );}
  