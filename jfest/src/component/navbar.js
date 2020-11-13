
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../image/Navlogo.png';
import '../css/navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar">
                    <a class="navbar-brand" href="#"><img src={Logo} style={{width:40}}/></a>
                    <a class="nav-link" href="#" >HOME <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="#">STORY <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="#">FOOD <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="#">MEMBER <span class="sr-only">(current)</span></a>
            </nav>
        </div>
    )
}

