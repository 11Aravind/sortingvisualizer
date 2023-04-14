import './Canvase.css'
import Elementbar from '../elementbar/Elementbar'
export default function Canvase({ randomArray }) {

  return (
    <div className='canvaseContainer'>

      {randomArray.map((singleElement,index) => (
 
        <div className='singleBar' key={index}style={{'height':`${singleElement/2}px`}} >{singleElement}</div>
        // <Elementbar key={index} element={singleElement} />
      ))
      }

    </div>
  )
}
