import React from 'react';
import arrow from '../image/arrow food.png'
import '../css/food.css';
import mushroom from '../image/mushroom.png';
import tofu from '../image/tofu.png';
import cabage from '../image/cabage.png';
import noodle from '../image/noodle.png';


class Food extends React.Component{
  state={
    content : "เมนูอาหารจากเห็ด เช่น แขนงกะหล่ำผัดซอสเห็ด, เห็ดหยอง, โจ๊กเห็ดหอม, โปรตีนเกษตร, ลาบเห็ด"
  }
  Changemushroom=()=>{
    this.setState({content : "เมนูอาหารจากเห็ด เช่น แขนงกะหล่ำผัดซอสเห็ด, เห็ดหยอง, โจ๊กเห็ดหอม, โปรตีนเกษตร, ลาบเห็ด" })
  }
  Changetofu=()=>{
    this.setState({content : "อาหารจากเต้าหู้ เช่น เต้าหู้ทอด, ลาบเต้าหู้, เต้าหู้น้ำแดง, หลนเต้าหู้ยี่, ข้าวผัดเต้าหู้" })
  }

Changecabage=()=>{
  this.setState({content : "อาหารจากกะหล่ำ เช่น กะหล่ำปลีต้มเห็ดหอมเจ,  ต้มจับฉ่ายเจ, ซุปกะหล่ำปียัดไส้หมูสับเจ, ผัดผัห 8 เซียนเจ" })
}

Changenoodle=()=>{
  this.setState({content : "อาหารจากเส้น เช่น ยากิโซบะผัดซอสมะเขือเทศเจ, ขนมจีนน้ำนาเจ, พัดหมี่ซั่วเจ, ก๋วยเตี๋ยวคั่วได่เจ" })
}
render(){
    return (
      <div className="Food">
        <div className="foodtopic">FOOD</div>
        <div className="foodpic">
        <div className="mushroom"><img src={mushroom} width='250pt'onClick={this.Changemushroom} className="thishover"/>
        <div className="arrow"><img src={arrow} width='50pt'/></div></div>
        <div className="tofu"><img src={tofu} width='250pt' onClick={this.Changetofu} className="thishover"/>
        <div className="arrow"><img src={arrow} width='50pt'/></div></div>
        <div className="cabage"><img src={cabage} width='250pt' onClick={this.Changecabage} className="thishover"/>
        <div className="arrow"><img src={arrow} width='50pt'/></div></div>
        <div className="noodle"><img src={noodle} width='250pt' onClick={this.Changenoodle} className="thishover"/>
        <div className="arrow"><img src={arrow} width='50pt'/></div></div>
      </div>
      <div className="foodcontent"><p><b>{this.state.content}</b></p>
        </div>
      </div>
    )
}
}
export default Food;
