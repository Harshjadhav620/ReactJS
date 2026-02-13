import { Page } from "./components/page";
import { CiBookmark } from "react-icons/ci";



function App () {
  return (
    <div className="parent">
      <div className="card">
          <div className="top">
           <img src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Logo-Transparent-PNG.png" alt="Amazon Logo" />
           <button>Save <CiBookmark /></button>
          </div>  

          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div>
              <h4>Part-time</h4>
              <h4>senior-level</h4>
            </div>
          </div>

          <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <button>Apply now</button>
          </div>
      </div>
    </div>  
  );
} 

export default App; 