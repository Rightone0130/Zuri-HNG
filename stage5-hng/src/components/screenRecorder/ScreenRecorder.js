import React, { useState, useEffect } from 'react';
// import { ReactMediaRecorder } from "react-media-recorder";
// import { useReactMediaRecorder } from "react-media-recorder";

import './ScreenRecorder.css';

const ScreenRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (isRecording) {
      interval = setInterval(() => {
        // Use a function to update timer based on the current value
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else if (isPlaying && !isPaused) {
      interval = setInterval(() => {
        // Use a function to update timer based on the current value
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRecording, isPlaying, isPaused]); // Include timer in the dependency array

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Reset the timer when starting a new recording
      setTimer(0);
    }
    // Implement your recording logic here
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setIsPaused(false); // Ensure that pause is not active when resuming playback
    // Implement your playing logic here
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  // Format the timer value as HH:MM:SS
  const formatTimer = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };




  // const { status, startRecording, stopRecording, mediaBlobUrl } =
  // useReactMediaRecorder({ screen: true });










  

  return (

<div>


    

    <div className={`floating-recorder`}>


        
      <div className='recorder__timer'>
        <p>{formatTimer(timer)}</p>
        <p className={`record__state ${isRecording ? 'recording' : 'record__stopped'}`}></p>
      </div>

      <div className={`recorder__function ${isRecording ? '' : ''}`}>
        <a onClick={togglePlay}>
          <p className='buttons'>
            {isPlaying && !isPaused ? (
              <img
                className=''
                src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1695989435/Frame_1000002571_wf6qto.png'
              />
            ) : (
              <img style={{ height: '1em' }} className='' src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1695993394/Zuri-HNG/icons8-play-50_dzcxty.png' />
            )}
          </p>
          {isPlaying && !isPaused ? 'Pause' : 'Play'}
        </a>

        <a onClick={toggleRecording}>
          <p className='buttons'> <img className='' src='' /> </p>
          {isRecording ? 'Stop' : 'Start'}
        </a>

        <a onClick={toggleRecording}>
          <p className='buttons'> <img className='' src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1695986679/Vector_zdkpbv.svg' /> </p>
          {isRecording ? 'Camera' : 'Camera'}
        </a>

        <a onClick={toggleRecording}>
          <p className='buttons'> <img className='' src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1695989877/microphone_wbnhem.svg' /> </p>
          {isRecording ? 'Mic' : 'Mic'}
        </a>

        <a onClick={resetTimer}>
          <p className='buttons'> <img className='' src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1695986601/trash_s9unfs.svg' /> </p>
          {isRecording ? 'Delete' : 'Delete'}
        </a>
      </div>
    </div>
    </div>


    

)}


export default ScreenRecorder;
