import {Link} from "react-router-dom";
import "./style.css";
import img from './new_satish.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Home(){
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    const homestyle = {
        textDecoration: "underline blue",
        textUnderlineOffset: "10px"
    }
    return(
        <div class="body">
            <nav class="navbar navbar-expand-lg navbar-expand-md">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">Vamsi</Link>
                </div>
                <button type="button" class="navbar-toggler btn btn-primary" data-bs-target="#demo" data-bs-toggle="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link me-5" style={homestyle}>Home</Link>
                        <Link to="/about" class="nav-link me-5">About</Link>
                        <Link to="/skill" class="nav-link me-5">Skills</Link>
                        <Link to="/projects" class="nav-link me-5">Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="main">
                <div class="myname">
                    <div>
                        <h1>Hello, I am</h1>
                        <h1>Vamsi Krishna</h1>
                        <h3>I am a passionate Data Scientist</h3>
                    </div>
                </div>
                <div>
                    <img src={img} alt="profile"/>
                </div>
            </div>
            
        </div>
    )
}

export default Home;