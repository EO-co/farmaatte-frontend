'use client';
import dynamic from 'next/dynamic';
import TopNavbar from "@/app/components/topNavbar";
import { useEffect, useRef } from "react";
import useDice, { Dice } from 'use-dice'

export default function Dicepage() {
  const { isRolling, value, roll } = useDice({ timeout: 1000 })

  return (
    <>
      <div>{TopNavbar("Terning", "/games")}</div>
      <div className="flex items-center justify-center py-10">
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h1>Dice value: {isRolling ? 'dice is rolling' : value}</h1>
          <Dice value={value} isRolling={isRolling} />
          <button onClick={roll} type="button">
            Roll dice
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
