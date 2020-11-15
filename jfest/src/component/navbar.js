import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../image/Navlogo.png';
import '../css/navbar.css';
import App from '../component/App';
import Story from '../component/story';
import Food from '../component/food';
import Color from '../component/color';

class Navbar extends Component{
    render(){
    return (
<div className="navbar navbar-default nav-fixed-top">
<nav class="navbar navbar-default">
    <div class="container-fluid"></div>
  <a class="navbar-brand" href="#">

     <ul class="nav navbar-nav">
         <li><img src={Logo} width="30" alt=""/></li>
        </ul>
        <div class="nav navbar-nav navbar-right" id="">
        <ul>
      <li class="active"><a href={Story}>Home</a></li>
      <li><a href={App}>Home</a></li>
      <li><a href={Story}>Story</a></li>
      <li><a href={Food}>Food</a></li>
      <li><a href={Color}>Color</a></li>
    </ul>
     </div>
  </a>
 
 
     
</nav>
</div>
      
        );
    }
}
    export default Navbar;

