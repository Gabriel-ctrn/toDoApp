import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f4f4f4',
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 30,
        color: '#3b82f6',
        paddingBottom: 20,
        fontWeight: 600,
        fontFamily: 'Sans',
        textDecorationLine: "underline",
        
    }
  });