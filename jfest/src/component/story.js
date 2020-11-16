import '../css/story.css';
import wind from '../image/wind.png'
import wind1 from '../image/windreason.png'
import cloud from '../image/cloud.png'

function Story() {
  return (
    <div className="Story">

      <div className="L">
        <img src={cloud} className="a3" alt="Clound" />
      </div>
     
      <p className="topic" id="Story">STORY</p>
      <p className="thaitopic">- เรื่องราวความเป็นมา -</p>
      
      <div className="StoryFrame">
        <div className="Content">
          <h6 className="font" >เทศกาลเจ เริ่มขึ้นเมื่อประมาณ 400 ปีมาแล้วในประเทศจีน
          เกิดขึ้นในสมัยที่ชาวจีนถูกแมนจูเข้ามาปกครอง และบังคับชนชาติจีนยอมรับวัฒนธรรมของตน
          สมัยนั้นเองมีคนจีนกลุ่มหนึ่งรวมตัวกันต่อต้านแมนจูโดยใช้หลักทางธรรมเข้าร่วมด้วย
          ชาวจีนกลุ่มนี้นุ่งขาว ห่มขาว และไม่รับประทานเนื้อสัตว์ ตามความเชื่อว่า การประพฤติปฏิบัติ
        ตามแนวทางนี้จะช่วยสร้างความเข้มแข็งให้กับตนเองได้คนกลุ่มนี้เรียกตัวเองว่า “หงี่หั่วท้วง”</h6>
        </div>
      
        <div className="M">
                <img src={cloud} className="a4" alt="Clound" />
            </div>

            <div>
                <img src={wind} className="w1" alt="wind" />
            </div>

            <div>
                <img src={wind1} className="w3" alt="wind" />
            </div>

            <div>
                <img src={wind} className="w4" alt="wind" />
            </div>

      </div>
    </div>
  );
}

export default Story;