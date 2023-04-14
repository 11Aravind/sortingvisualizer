import React, { useState } from "react";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([]);

  const generateArray = () => {
    const arr = [];
    for (let i = 0; i < 50; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    setArray(arr);
  };

  const bubbleSort = () => {
    const arr = [...array];
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setTimeout(() => {
            setArray(arr);
          }, (i * len + j) * 50);
        }
      }
    }
  };

  return (
    <div>
      <button onClick={generateArray}>Generate Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <div>
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "blue",
              height: `${value * 3}px`,
              width: "10px",
              display: "inline-block",
              margin: "0 1px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
