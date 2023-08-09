import "./Navigation.css";
import "./Scroll.css";
import {Link} from 'react-router-dom'

const Body = () => {
    return (
      
        <div className="container">
        <div className="hero-content"> 
           <div className="content">
           <h1 className="heading">My React Page</h1>
          <p className="paragraph">
            This is my React page for assigment
          </p>

        
  
          <div className="hero-btn">
            <Link to="https://github.com/saikiran96c" className="hero-btn">
            <button>GitHub </button>
            </Link>

            <Link to="https://legacy.reactjs.org/tutorial/tutorial.html">
            <button className="secondary-btn">Learn more</button>
            </Link>
            
          </div>
           </div>
         </div>
        
         </div>

         
      

    );
  };

 

    
  

  
  
  export default Body;