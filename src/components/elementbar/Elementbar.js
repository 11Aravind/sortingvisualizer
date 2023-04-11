import './Elementbar.css'

export default function Elementbar({element,key}) {
    let h=element*1;
   
  return (
<div className='singleBar' style={{'height':`${h}px`}} key={key}>{element}</div>
  )
}
