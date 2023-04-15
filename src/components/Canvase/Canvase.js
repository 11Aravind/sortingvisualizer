import './Canvase.css'
import Elementbar from '../elementbar/Elementbar'
import { useEffect } from 'react'
export default function Canvase({ randomArray, activeItem1, activeItem2, sortedIndex }) {
  return (
    <div className='canvaseContainer'>

      {randomArray.map((singleElement, index) => (

        <div className={(index == activeItem1 || index == activeItem2) ? 'singleBar green' : index >= sortedIndex ? 'singleBar red' : 'singleBar'} key={index} style={{ 'height': `${singleElement / 2}px` }} >{singleElement}</div>
        // <Elementbar key={index} element={singleElement} />
      ))
      }

    </div>
  )
}
