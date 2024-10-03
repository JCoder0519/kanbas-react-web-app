import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 60 }} 
         className="list-group rounded-0 bg-black
         position-fixed bottom-0 top-0 z-2 d-none d-md-block">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" /></a><br />
      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-white text-danger">
        <FaRegCircleUser className="fs-1 text text-white" /><br />
        Account </Link><br />
        <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-black text-white">
        <AiOutlineDashboard className="fs-1 text-danger" /><br />
        Dashboard </Link><br />
      <Link to="/Kanbas/Dashboard" id="wd-course-link"
        className="list-group-item text-center border-0
                   bg-black text-white">
        <LiaBookSolid className="fs-1 text-danger" /><br />
        Courses </Link><br />
      {/* complete styling the rest of the links */}
    </div>
);}

