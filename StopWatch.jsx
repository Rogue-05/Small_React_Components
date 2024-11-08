import { useState,useEffect,useRef } from "react"
function StopWatch(){

  const [isRunning,setIsRunning]=useState(false);
  const [elapsedTime,setElapsedTime]=useState(0);
  const intervalIdRef=useRef(null);
  const startTimeRef=useRef(0);

  useEffect(()=>{
    if (isRunning){
      intervalIdRef.current=setInterval(()=>{
        setElapsedTime(Date.now()-startTimeRef.current);
      },10)
    }
    return (()=>{
      clearInterval(intervalIdRef.current);
    })
  },[isRunning]);

  function start(){
    setIsRunning(true);
    startTimeRef.current= Date.now() - elapsedTime;
  }

  function stop(){
    setIsRunning(false);
  }

  function reset(){
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime(){
    let hours=Math.floor(elapsedTime /(1000*60*60));
    let mins=Math.floor(elapsedTime /(1000*60)%60);
    let secs=Math.floor(elapsedTime /(1000)%60);
    let milsec=Math.floor(elapsedTime %(100));

    hours=String(hours).padStart(2,"0");
    mins=String(mins).padStart(2,"0");
    secs=String(secs).padStart(2,"0");
    milsec=String(milsec).padStart(2,"0");

    return `${mins}:${secs}:${milsec}`
  }

  return (<div className="stopwatch">
            <div className="display" >{formatTime()}</div>
            <div className="controls">
              <button className="start-button" onClick={start}>Start</button>
              <button className="stop-button" onClick={stop}>Stop</button>
              <button className="reset-button" onClick={reset}>Reset</button>
            </div>
          </div>)

}

export default StopWatch