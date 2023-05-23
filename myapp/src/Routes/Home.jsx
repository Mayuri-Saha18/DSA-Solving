import { Link } from "react-router-dom";
import home from "../style/home.css"

function Home() {
  return (
    <div className="home">
     <div>
      <Link to="/signup">
      <h3> Signup Page</h3>
      </Link>

      <Link to="/userlog">
      <h3>Login Page</h3>
      </Link>

      <Link to="/dashboard">
        <h3>Dashboard</h3>
      </Link>
      </div>
    </div>

  );
}
export default Home;
