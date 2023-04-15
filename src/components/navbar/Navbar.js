import './Navbar.css'
import Canvase from '../Canvase/Canvase'
import { useEffect, useState } from 'react';
export default function Navbar() {

  const [randomArray, handleArray] = useState([]);
  const [activeItem1, handleActiveItem1] = useState(0);
  const [activeItem2, handleActiveItem2] = useState(0);
  const [sortedIndex, handleSortedIndex] = useState(0);
  const generateArray = () => {
    let temp = [];
    handleArray([]);
    for (let i = 0; i < 15; i++)
      temp.push(Math.floor(Math.random() * (600 - 100)) + 100);
    handleArray(temp);
  }
  function refreshPage() {
    generateArray();
    // window.location.reload(false);
  }

  useEffect(() => {
    generateArray();
    // console.log("use effect")
  }, [])
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // async function sleep(ms) {
  //   await timeout(ms);
  //   return fn(...args);
  // }

  const bubbleSort = () => {
    const arr = [...randomArray];
    const len = arr.length;
    let timeOutIntervel = 0;

    for (let i = 0; i < len - 1; i++) {
      // console.log("await started");
      // (async function sleep(ms) {
      //   console.log("pre await");
      //   await timeout(timeOutIntervel);
      // console.log("await complete");

      for (let j = 0; j < len - i - 1; j++, timeOutIntervel = timeOutIntervel + 1000) {

        (async function sleep(ms) {
          console.log("pre await");
          await timeout(timeOutIntervel);
          handleSortedIndex(len - i);
          handleActiveItem1(j);
          handleActiveItem2(j + 1);
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            handleArray(arr);
          }
        }())
      }
      // }())


    }

    // handleArray(arr);
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

      <Canvase randomArray={randomArray} activeItem1={activeItem1} activeItem2={activeItem2} sortedIndex={sortedIndex} />
    </>
  )
}
