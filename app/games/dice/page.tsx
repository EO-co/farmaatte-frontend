"use client";
import TopNavbar from "@/app/components/topNavbar";
import { useRef } from "react";
import ReactDice, { ReactDiceRef } from 'react-dice-complete' // Docs: https://github.com/AdamTyler/react-dice-complete


export default function () {
  const reactDice = useRef<ReactDiceRef>(null)

  const rollDone = (totalValue: number, values: number[]) => {
    console.log('individual die values array:', values)
    console.log('total dice value:', totalValue)
  }

  const rollAll = () => {
    reactDice.current?.rollAll()
  }

  return (
    <>
      <div>{TopNavbar("Terning", "/games")}</div>
      <div className=" flex items-center justify-center py-10">
        <div className="">
        <ReactDice
          numDice={2}
          ref={reactDice}
          rollDone={rollDone}
          faceColor="#F9F0DF"
          dotColor="#070506"
          outline={true}
          dieSize={90}
          margin={30}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => rollAll()}>
          Roll all
        </button>
        </div>
      </div>
    </>
  );
}
