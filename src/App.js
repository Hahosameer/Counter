 import { useState } from "react";
 import './App.css';

function App() {
    let [counter, setCounter] = useState(0);
        let [progress, setProgress] = useState(0);

    const addValue = () => {
      // counter = counter +1

     let updatedCounter = counter + 1;
     setCounter(updatedCounter);
     updateProgress(updatedCounter);
      console.log("add value", counter);
    };

    const ReamoveValue = () => {
       let updatedCounter = counter - 1;
      if(updatedCounter < 0){
            updatedCounter = 0;
      }
      setCounter(updatedCounter);
      updateProgress(updatedCounter);
    
    };
    const ResetValue =() => {
      setCounter(0)
       updateProgress(0);
    }


       const updateProgress = (counter) => {
      let progressValue = (counter / 100) * 100; // Assuming counter's maximum value is 100
      setProgress(progressValue);
    }


  return (
    <div className="App">
      <header className="App-header">
        <div
          class="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar" style={{width: `${progress}%`}}>
            {progress}%
          </div>
        </div>

        <div id="Counter">
          <h1 className="heading">Counter App</h1>

          <h3>Counter Value : {counter}</h3>
          <button onClick={addValue}>Increment</button>
          <button onClick={ReamoveValue}>Decremrnt</button>
          <button onClick={ResetValue}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
