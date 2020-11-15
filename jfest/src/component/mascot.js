import '../css/mascot.css';
import mascot from '../image/mascot.png';
import wind from '../image/wind.png'
import cloud from '../image/cloud.png'

function Mascot() {
  return (
    <div className="Mascot">
      
      <div className="props">
      <img src={mascot} width='400pt' className="nongtofu" />
      <p className="invite">แล้วมากินเจด้วยกันนะฮะ&nbsp;^3^</p>
      </div>
      

      <div className="M">
        <img src={cloud} className="a8" alt="Clound" />
      </div>

      <div className="M">
        <img src={cloud} className="a9" alt="Clound" />
      </div>
      
      <div>
                <img src={wind} className="w7" alt="wind" />
            </div>

    </div>
  );
}

export default Mascot;
