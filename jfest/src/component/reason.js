import '../css/reason.css';
import wind from '../image/wind.png'
import wind2 from '../image/windhome.png'
import cloud from '../image/cloud.png'


function Reason() {
  return (
    <div className="Reason">
      <div className="reasontp" id="Reason"> เหตุผลที่ควรกินเจ </div>
      <div className="reason">
      <h6 className="font" >1. กินเพื่อสุขภาพอาหารเจเป็นอาหารประเภทชีวจิต<br></br>
สามารถขับพิษของเสียต่าง ๆออกจากร่างกายได้, ปรับระบบไหลเวียนโลหิต
</h6></div>
      <div className="reason"> 
      <h6 className="font" >2. กินเจ เพื่อทำบุญ เพื่อชำระล้างใจให้ใสสะอาด <br></br>ไม่เบียดเบียนสัตว์โลก</h6></div>
      <div className="reason"> 
      <h6 className="font" >3. กินเพื่อเว้นกรรม หันมารับประทานอาหารเจ ซึ่งทำให้ร่างกายเติบโตได้เหมือนกัน โดยไม่ต้องฆ่าสัตว์</h6></div>    

      <div className="M">
        <img src={cloud} className="a5" alt="Clound" />
      </div>

      <div>
        <img src={wind2} className="w5" alt="wind" />
            </div>

    </div>
    
  );
}

export default Reason;