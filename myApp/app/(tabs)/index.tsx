import SplashScreen from "@/views/SplashScreen/SplashScreen";
import TaskApp from "@/views/TaskApp/TaskApp";
import React, { useState } from "react";

// Componente principal
export default function App() {
  const [mostrarTaskApp, setMostrarTaskApp] = useState(false);

  // Função para mudar para a tela de TaskApp quando o botão for pressionado
  const irParaTaskApp = () => {
    setMostrarTaskApp(true);
  };

  // Se mostrarTaskApp for true, mostra a tela TaskApp, senão mostra a SplashScreen
  return mostrarTaskApp ? (
    <TaskApp />
  ) : (
    <SplashScreen onPressBotao={irParaTaskApp} />
  );
}
