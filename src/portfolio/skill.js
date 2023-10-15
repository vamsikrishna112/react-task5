import {Link} from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Skill(){

    const skillstyle = {
        textDecoration: "underline blue",
        textUnderlineOffset: "10px",
    }

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-expand-md">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">Vamsi</Link>
                </div>
                <button type="button" class="navbar-toggler btn btn-primary" data-bs-target="#demo" data-bs-toggle="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link me-5" >Home</Link>
                        <Link to="/about" class="nav-link me-5">About</Link>
                        <Link to="/skill" class="nav-link me-5" style={skillstyle}>Skills</Link>
                        <Link to="/projects" class="nav-link me-5">Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="skillhead"><h2>Skills</h2></div>
            <div class="skillmain">
                <div>
                    <h4>Programming languages:</h4>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                    </ul>
                    <h4>Web Development skills:</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>PHP</li>
                        <li>NodeJS</li>
                        <li>ReactJs</li>
                        <li>ExpressJS</li>
                    </ul>
                    <h4>Database Management:</h4>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div>
                    <h4>Data Analysis:</h4>
                    <ul>
                        <li>Matplotlib</li>
                        <li>R script</li>
                        <li>Numpy</li>
                        <li>Pandas</li>
                    </ul>
                    <h4>Cloud Technology:</h4>
                    <ul>
                        <li>Amazon Web Services</li>
                    </ul>
                    <h4>Languages:</h4>
                    <ul>
                        <li>English</li>
                        <li>Telugu</li>
                        <li>Hindi</li>
                        <li>French (Basic)</li>
                    </ul>
                </div>
                
            </div>
            <div class="skillhead"><h2>Achievements</h2></div>
            <li class="achieve">Stood among the Top 40 teams in Finale of IBM Hack Challenge 2023</li>
        </div>
    )
}

export default Skill;