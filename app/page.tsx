'use client';

import { useEffect } from "react";
import useSettings from "./hooks/useSettings";

export default function Home() {
  const darkMode = useSettings((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div>
      <div className="flex flex-col justify-center text-center items-center min-h-screen">
        <h1 className="text-4xl dark:text-white">Counters</h1>
      </div>
    </div>
  );
}
