
import './App.css';
import imageInSrc from "./imageInSrc.jpg";
import "./styles.css";

function App() {
  return (
  
<div className="App"  >
<div style={{border:"solid 1px black",maxWidth:'100vw'}} >

<h1 className="title red">Your name here</h1>

<br >

<img src={imageInSrc.jpg} alt ="imageInSrc.jpg" />
</br >

<img src="/imageInPublic.jpg" alt="imageInPublic" />

</div>

<video width="320" height="240" controls type="video/mp4">

<source src="/myVideo.mp4" type="video/mp4" />
</video>
    </div>
  );
}

export default App;
