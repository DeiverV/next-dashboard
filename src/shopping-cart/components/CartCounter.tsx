"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }) => {
  const [count, setCount] = useState(value);

  const handleCounter = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex flex-row-reverse gap-2">
        <button
          onClick={() => handleCounter(1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
        >
          +1
        </button>
        <button
          onClick={() => handleCounter(-1)}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]"
        >
          -1
        </button>
      </div>
    </>
  );
};
