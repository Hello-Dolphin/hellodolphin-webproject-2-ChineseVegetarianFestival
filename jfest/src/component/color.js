import '../css/color.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import latern from '../image/latern.png';
import wind from '../image/windcolor.png'

function Color() {
  return (
    <div className="Color">

      <div className="latern">
      <img src={latern} width='50pt' s/>
      <img src={latern} width='50pt' />
      <img src={latern} width='50pt' />
      <img src={latern} width='50pt' />
      <img src={latern} width='50pt' />
      <img src={latern} width='50pt' />
      <img src={latern} width='50pt' />
      <img src={latern} width='50pt' />
      <img src={latern} width='50pt' />
      <img src={latern} width='50pt' />
      </div>
      <div className="move">
      <p className="colortp" id="Color"> COLOR </p>
      <p className="colorthtp">- สีที่เกี่ยวข้อง -</p>
      <div className="color">
        <h6 className="cfont" ><div className="redsquare"></div> <p><b>สีแดง</b> เป็นสีที่ชาวจีนเชื่อว่าเป็นสีศิริมงคล ดังจะเห็นได้ว่า<br></br>ในงานมงคลต่างๆ ของคนจีนไม่ว่าจะเป็นงานแต่ง วันตรุษจีน</p>
</h6></div>
      <div className="color"> 
        <h6 className="cfont" ><div className="yellowsquare"></div><p><b>สีเหลือง</b> กลุ่มแรกคือกษัตรย์ซึ่งเห็นได้จากหนังจีน เครื่องแต่งกาย
      <br></br>และภาชนะต่างๆ เป็นสีเหลืองทอง กลุ่มที่สองคืออาจาร์ยปราบผี</p></h6></div>
      <div className="color">
        <h6 className="cfont" ><div className="whitesquare"></div><p><b>สีขาว</b> ตามธรรมเนียมจีนสีขาวคือสีในการไว้ทุกข์
      <br></br>ถ้าท่านสังเกตในพิธีงานศพของจีนจะมีลูกหลานแต่งชุดสีขาวอยู่</p></h6></div>
    </div>

    <div>
       <img src={wind} className="w6" alt="wind"/>
            </div>

    </div>
  );
}

export default Color;