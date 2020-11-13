
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../image/Navlogo.png';
import '../css/navbar.css';

export default function Navbar() {
    return (
        <div>
            <div className="hello">
            <ul class="nav justify-content-end">
            <li class="mr-auto"> <img src={Logo} width='40pt' /> </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">STORY</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">FOOD</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">MEMBER</a>
                </li>
            </ul>
            </div>
        </div>
    )
}
{/* <span class="sr-only">(current)</span> */ }
