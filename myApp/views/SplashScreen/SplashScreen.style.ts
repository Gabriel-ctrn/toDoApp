import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  itens: {
    alignItems: "center",
  },
  logo: {
    width: 300,  // Define a largura da imagem
    height: 300, // Define a altura da imagem
    resizeMode: "contain", // Faz com que a imagem seja redimensionada proporcionalmente
    marginBottom: 20, // Espaço abaixo da imagem
  },
});
