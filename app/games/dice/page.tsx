'use client';
import dynamic from 'next/dynamic';
import TopNavbar from "@/app/components/topNavbar";
import { useEffect, useState } from "react";
import React from 'react'
//import useDice, { Dice, DiceValue } from 'use-dice';
import Dice from '@nartoan/react-dice-roll';



function randomIntFromInterval(min: number, max: number):number  {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



export default function Dicepage() {
  
  const [numOfDice, setNumOfDice] = useState<number>(1);
  const [sound, setSound] = useState<HTMLAudioElement | null>(null);
  const [easter, setEaster] = useState<boolean>(false);


  function simulateEnterPress(sound: HTMLAudioElement) {
    console.log("Enter was pressed");
      const event = new KeyboardEvent('keypress', {
        bubbles: true,
        cancelable: true,
        key: 'Enter',
        code: 'Enter',
        keyCode: 13,
        which: 13,
      });
      document.dispatchEvent(event);
    return
  };

  function applyEasterEgg(sound: HTMLAudioElement) {

    setEaster(true)
    sound.play();
    simulateEnterPress(sound);

  };

  function rollDice(sound: HTMLAudioElement) {
    if (easter) {setEaster(false)}
    if ((randomIntFromInterval(1,100) === 69)) { 
    // if (true) { 
      applyEasterEgg(sound);
      
      return; 
    } else {
      simulateEnterPress(sound);

    };

  }

  useEffect(() => {
    const audio = new Audio("/farmaatten/sounds/SP.mp3");
    setSound(audio);
  }, []);

  useEffect(() => {

  },[easter])

  return (
    <div>
      <div>{TopNavbar("Terning", "/games")}</div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mt-4">
          <button
            className="p-5 border border-gray-800 rounded-md text-lg font-bold"
            onClick={() => setNumOfDice(Math.max(numOfDice - 1, 1))}
          >
            -
          </button>
          <span className="mx-4 text-xl font-semibold">{numOfDice}</span>
          <button
            className="p-5 border border-gray-800 rounded-md text-lg font-bold"
            onClick={() => setNumOfDice(Math.min(numOfDice + 1, 6))}
          >
            +
          </button>
        </div>

        
        
        {easter ? 
        <div>
          <h1 className='mt-3 text-3xl font-bold'>De her skal drikke!</h1>
        </div>
        : 
        <></>
        }
        <div className={"py-3"} onClick={() => sound && rollDice(sound)}>

        
          <div className="grid grid-cols-2 gap-10 mt-4">

          {easter ? Array.from({ length: numOfDice }).map((_, index) => (
            <Dice
              key={index}
              onRoll={(value) => console.log(value)}
              defaultValue={randomIntFromInterval(1, 6) as 2 | 1 | 3 | 4 | 5 | 6 | undefined}
              size={90}
              triggers={['Enter']}
              faces={["/farmaatten/oliver.jpg", "/farmaatten/daniel.jpg", "/farmaatten/frederik.jpg", "/farmaatten/mads.jpg", "/farmaatten/tobias.jpg", "/farmaatten/simon.jpg"]}
            />
          ))
          :
          Array.from({ length: numOfDice }).map((_, index) => (
          <Dice
              key={index}
              onRoll={(value) => console.log(value)}
              defaultValue={randomIntFromInterval(1, 6) as 2 | 1 | 3 | 4 | 5 | 6 | undefined}
              size={100}
              triggers={['Enter']}
            />
          ))}
            
          </div>
        </div>

        {/* <div className="flex items-center justify-center mt-4">
          <button
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
            onClick={() => sound && rollDice(sound)}
          >
            Roll
          </button>
        </div> */}
      </div>
    </div>
  );
}
