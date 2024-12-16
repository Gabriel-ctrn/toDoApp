import React from "react";
import { View, Image, Button } from "react-native";
import { styles } from "./SplashScreen.style";

interface SplashScreenProps {
  onPressBotao: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onPressBotao }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itens}>
        <Image
          source={require("../../assets/images/logo.jpg")}
          style={styles.logo}
        />
        
        <Button title="Minhas Tarefas" onPress={onPressBotao} />
      </View>
    </View>
  );
};

export default SplashScreen;
