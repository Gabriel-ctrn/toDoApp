import React from "react";
import { View, Image, Button } from "react-native";
import { styles } from "./SplashScreen.style";

// Tipando a prop `onPressBotao`
interface SplashScreenProps {
  onPressBotao: () => void; // Define que onPressBotao é uma função sem parâmetros e sem retorno
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onPressBotao }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itens}>
        <Image
          source={require("../../assets/images/logo.jpg")}
          style={styles.logo}
        />
        
        {/* Botão para navegar para a TaskApp */}
        <Button title="Minhas Tarefas" onPress={onPressBotao} />
      </View>
    </View>
  );
};

export default SplashScreen;
