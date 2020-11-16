
import '../css/App.css';
import cloud from '../image/cloud.png';
import logo from '../image/logo.png';
import wind1 from '../image/windreason.png'
import wind from '../image/windhome.png';

function App() {
  return (
    <div className="App">
  
   <div className="S">
                <img src={cloud} className="a1" alt="Clound" />
            </div>
            
            <div className="M">
                <img src={cloud} className="a2" alt="Clound" />
            </div>
            
            <div>
                <img src={wind1} className="w2" alt="wind" />
            </div>

      <div className="jfest" id="Home"> <p className="jtopic">เทศกาล</p>
      
        <div className="img"><img src={logo} alt="cloud" width='438pt' />
        </div>

        </div>       

    </div>
  );
}

export default App;
