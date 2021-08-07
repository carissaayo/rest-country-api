import { useGlobalContext } from "../Context";
import "./Header.css";

const Header = ()=> {
  const {toggleTheme,darkMode} =useGlobalContext();
  return (
    <div className="header">
      <h4>Where in the world?</h4>
      <section className="switch-con" onClick={toggleTheme}>
        
          {darkMode ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="fa fa-sun"></i>
          )}
     
        <p>{darkMode ? `Dark Mode` : `Light Mode`}</p>
      </section>
    </div>
  );
}

export default Header;
