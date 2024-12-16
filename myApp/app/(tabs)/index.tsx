import SplashScreen from "@/views/SplashScreen/SplashScreen";
import TaskApp from "@/views/TaskApp/TaskApp";
import React, { useState } from "react";

export default function App() {
  const [mostrarTaskApp, setMostrarTaskApp] = useState(false);

  const irParaTaskApp = () => {
    setMostrarTaskApp(true);
  };

  return mostrarTaskApp ? (
    <TaskApp />
  ) : (
    <SplashScreen onPressBotao={irParaTaskApp} />
  );
}
