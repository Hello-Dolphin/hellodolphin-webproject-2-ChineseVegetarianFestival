import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../image/Navlogo.png';
import '../css/navbar.css';
import App from '../component/App';
import Story from '../component/story';
import Food from '../component/food';
import Color from '../component/color';
var Scroll = require('react-scroll');

class Navbar extends Component{
    render(){ 
    return (
    <div class="nav-fixed"> 
<nav class="navbar navbar-expand-lg navbar-light">
<div class="collapse navbar-collapse" id="navbarNav">
  <img src={Logo} width='50pt'/>
    <li class="nav-item active" id="gin-j">Gin J</li>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  </div>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#Home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Story">Story</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Reason">Reason</a>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="#Food">Food</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Color">Color</a>
      </li>
    </ul>
</nav>
</div>
      
        );
    }
}
    export default Navbar;

