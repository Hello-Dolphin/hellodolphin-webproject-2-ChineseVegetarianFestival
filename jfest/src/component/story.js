import '../css/story.css';
import wind from '../image/wind.png'

function Story() {
  return (
    <div className="Story">
      <div className ="wind">
      <img src={wind} width="250px"/>
      </div>
       <p className="topic">STORY</p> 
      <div className="StoryFrame">
        <div className="Content">
        <h6 className="font" >เทศกาลเจ เริ่มขึ้นเมื่อประมาณ 400 ปีมาแล้วในประเทศจีน
        เกิดขึ้นในสมัยที่ชาวจีนถูกแมนจูเข้ามาปกครอง และบังคับชนชาติจีนยอมรับวัฒนธรรมของตน
        สมัยนั้นเองมีคนจีนกลุ่มหนึ่งรวมตัวกันต่อต้านแมนจูโดยใช้หลักทางธรรมเข้าร่วมด้วย
        ชาวจีนกลุ่มนี้นุ่งขาว ห่มขาว และไม่รับประทานเนื้อสัตว์ ตามความเชื่อว่า การประพฤติปฏิบัติ
        ตามแนวทางนี้จะช่วยสร้างความเข้มแข็งให้กับตนเองได้คนกลุ่มนี้เรียกตัวเองว่า “หงี่หั่วท้วง”</h6>
      </div>
      </div>
    </div>
  );
}

export default Story;