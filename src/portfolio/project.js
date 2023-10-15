import {Link} from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function Projects(){

    const projectstyle = {
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
                        <Link to="/skill" class="nav-link me-5" >Skills</Link>
                        <Link to="/projects" class="nav-link me-5" style={projectstyle}>Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="skillhead"><h2>Projects</h2></div>
            <div class="projectdiv">
                <h3>Classification of flying objects using Deep learning architectures:</h3>
                <li class="projectdes">Recognition of Flying Objects using popular CNN architectures. 
                    This classification of flying objects is very challenging task 
                    since there are more diversity of flying objects and each diversity 
                    is classified as a class and the model is trained based on large dataset 
                    which has 5 classes aeroplanes, birds, helicopters, drones and missiles. 
                    Flying objects classification plays a vital role in various applications 
                    like aerial surveillance, unmanned aerial vehicle (UAV) navigation, and 
                    air space safety.<br/> We have used 6 CNN architectures i.e., VGG16, VGG19, ResNet, LeNet, AlexNet, GoogleNet.
                </li>
                <br/>
                <h3>Online Food Booking Website</h3>
                <li class="projectdes">A dynamic website which is a user-friendly website. This website consists of both front-end 
                    and back-end. Front-end part is completed based on HTML, CSS, JavaScript. And for back-end construction
                    PHP and MySQL plays a major role.
                </li>
                <span class="projectdesspan">Repository link</span> &nbsp;
                <a href="https://github.com/SatishPulleti/Food-booking-website" target="_blank" class="repo">Click here</a>
                <br/><br/>
                <h3>Driver Drowsiness Detection System</h3>
                <li class="projectdes">Developed a model with a team of six members
                    which detects the drowsiness of a driver using
                    Eye blink sensor and Arduino Microcontroller. By using this model we can stop the vehicle 
                    automatically whenever the model detects that the driver is feeling drowsy or he is sleeping. This working 
                    was shown using a fan in the prototype. This fan represents the engine of the vehicle.</li>
            </div>
        </div>
    )
}

export default Projects;