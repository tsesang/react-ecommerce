import TopNav from "../topNav/TopNav";
import Navbar from "../navbar/Navbar";

import './notFound.css'
export default function NotFound() {

  return (
    <>
        <TopNav/>
    <Navbar/>
    <div className="not-found">
        <div>
            
      <h1>404</h1>
      <h1>page not found</h1>
      <a href="/">go back to home page</a>
        </div>
    </div>
    </>
  );
}


