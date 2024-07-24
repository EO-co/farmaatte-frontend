'use client';
import dynamic from 'next/dynamic';
import TopNavbar from "@/app/components/topNavbar";
import { useEffect, useState } from "react";
import useDice, { Dice, DiceValue } from 'use-dice';

function randomIntFromInterval(min: number, max: number): DiceValue {
  return Math.floor(Math.random() * (max - min + 1) + min) as DiceValue;
}

export default function Dicepage() {
  const { isRolling, value, roll } = useDice({ timeout: 1000 });
  
  const [numOfDice, setNumOfDice] = useState(1);
  const [diceValues, setDiceValues] = useState<DiceValue[]>(Array(numOfDice).fill(1));

  useEffect(() => {
    setDiceValues(Array(numOfDice).fill(1).map(() => randomIntFromInterval(1, 6)));
  }, [numOfDice]);

  const handleRoll = () => {
    setDiceValues(diceValues.map(() => randomIntFromInterval(1, 6)));
    roll();
  };

  return (
    <div>
      <div>{TopNavbar("Terning", "/games")}</div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center mt-4">
          <button
            className="px-2 py-1 border border-gray-300 rounded-md"
            onClick={() => setNumOfDice(Math.max(numOfDice - 1, 1))}
          >
            -
          </button>
          <span className="mx-4 text-xl font-semibold">{numOfDice}</span>
          <button
            className="px-2 py-1 border border-gray-300 rounded-md"
            onClick={() => setNumOfDice(Math.min(numOfDice + 1, 6))}
          >
            +
          </button>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-4">
          {diceValues.map((diceValue, index) => (
            <div key={index}>
              <Dice value={diceValue} isRolling={isRolling} />
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center mt-4">
          <button
            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md"
            onClick={handleRoll}
            disabled={isRolling}
          >
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}
