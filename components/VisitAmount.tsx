
'use client'

import { useEffect, useState } from "react";

interface VisitAmountProps {
  visitNumber: string;
}

export default function VisitAmount({visitNumber}: VisitAmountProps) {
    
  const [counter, setCounter] = useState<number>(0)


  return(
      <div>
      <h1>Welcome to Farmåtte!</h1>
      <p>
        This site has been visited {visitNumber} times!
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCounter(counter + 1)}>
        {counter}
      </button>
      
    </div>
  );
}