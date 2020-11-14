import '../css/mascot.css';
import mascot from '../image/mascot.png';

function Mascot() {
  return (
    <div className="Mascot">
      <img src={mascot} width='400pt' className="nongtofu" />
      <div className="invite"><p><b>แล้วมากินเจด้วยกันนะฮะ ^3^</b></p></div>
    </div>
  );
}

export default Mascot;
