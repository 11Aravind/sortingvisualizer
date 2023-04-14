import './Navbar.css'
import Canvase from '../Canvase/Canvase'
import { useEffect, useState } from 'react';
export default function Navbar() {

 const[randomArray,handleArray]=useState([]);

const generateArray=()=>{
  let temp=[];
  handleArray([]);
  for(let i = 0; i < 15; i++)
  temp.push(Math.floor(Math.random() * (600 - 100)) + 100);
  handleArray(temp);
}
function refreshPage() {
  window.location.reload(false); 
}

  useEffect(()=>{
    generateArray();
    console.log("use effect")
  },[])
  
  
const swap=(first,second)=>{
  if (first > second) {
            const temp = first;
            first = second;
            second = temp;
            // setTimeout(() => {
            //   handleArray(arr);
            // }, (1 * len + 1)*50 );
          }
}

  const bubbleSort = () => {
    const arr = [...randomArray];
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
           setTimeout(() => {
              handleArray(arr);
            }, (1 * len + 1)*50 );
        }
          
          
      }
    }
  };


  return (
    <>
      <div className="nav-container">
        <div className="logo-container">SortingVisualizer</div>
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
            <button className="runBtn" onClick={bubbleSort}>run</button>
          </div>
        </div>
      </div>

      <Canvase randomArray={randomArray} />
    </>
  )
}
