
import '../css/App.css';
import cloud from '../image/cloud.png';
import logo from '../image/logo.png';

function App() {
  return (
    <div className="App">
      <div className ="cloud">
      <img src={cloud} width="250px"/>
      </div>
      <div className ="cloud1">
      <img src={cloud} width="350px"/>
      </div>
      <div className ="cloud2">
      <img src={cloud} width="400px"/>
      </div>
      <div className ="cloud3">
      <img src={cloud} width="150px"/>
      </div>
      <div className="jfest"> <p className="jtopic">เทศกาล</p> <div className="img"><img src={logo} alt="cloud" width='438pt' /></div></div>
    </div>
  );
}

export default App;
