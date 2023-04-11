import './Canvase.css'
import Elementbar from '../elementbar/Elementbar'
export default function Canvase({ randomArray }) {

  return (
    <div className='canvaseContainer'>

      {randomArray.map((singleElement, key) => (
        <Elementbar key={key} element={singleElement} />
      ))
      }

    </div>
  )
}
