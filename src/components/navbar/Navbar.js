import './Navbar.css'
import Canvase from '../Canvase/Canvase'
export default function Navbar() {
  const randomArray = [];
  for (let i = 0; i < 15; i++)
    randomArray.push(Math.floor(Math.random() * (600 - 100)) + 100);
  const refreshPage = () => {
    window.location.reload(false);
  }
  return (
    <>

      <div className="nav-container">
        <div className="logo-container">Navbar</div>
        <div className="menu-container">
          <div className="selection-box">
            <select name="" id="">
              <option value="select">--Select--</option>
              <option value="bubble">Bubble</option>
              <option value="selection">Selection</option>
              <option value="insertion">Insertion</option>
              <option value="merge">Merge</option>
              <option value="quick">Quick</option>
            </select>
          </div>
          <div className="new-array">
            <button className="new-array" onClick={refreshPage}>New Array</button>
          </div>
          <div className="run-btn">
            <button className="runBtn">run</button>
          </div>
        </div>
      </div>

      <Canvase randomArray={randomArray} />
    </>
  )
}
