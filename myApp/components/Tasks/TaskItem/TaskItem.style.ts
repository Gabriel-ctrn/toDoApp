import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskItem: {
      backgroundColor: '#fff',
      padding: 15,
      marginBottom: 10,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    taskTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    taskDescription: {
      fontSize: 14,
      color: 'gray',
      marginVertical: 5,
    },
    taskStatus: {
      marginVertical: 5,
      color: 'gray',
    },
    toggleButton: {
      backgroundColor: '#3b82f6',
      padding: 5,
      marginVertical: 5,
      borderRadius: 5,
    },
    toggleButtonText: {
      color: '#fff',
      textAlign: 'center',
    },
    deleteButton: {
      backgroundColor: '#ef4444',
      padding: 5,
      borderRadius: 5,
      marginTop: 5,
    },
    deleteButtonText: {
      color: '#fff',
      textAlign: 'center',
    },
  });