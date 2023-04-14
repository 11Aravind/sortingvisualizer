import './Elementbar.css'

export default function Elementbar({element,key}) {
    let h=element/2;
   
  return (
<div className='singleBar' style={{'height':`${h}px`}} >{element}</div>
  )
}
