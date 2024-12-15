import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { styles } from './TaskForm.style';

interface TaskFormProps {
  taskTitle: string;
  taskDescription: string;
  setTaskTitle: (title: string) => void;
  setTaskDescription: (description: string) => void;
  addTask: () => void;
}

const TaskForm = ({
  taskTitle,
  taskDescription,
  setTaskTitle,
  setTaskDescription,
  addTask,
}: TaskFormProps) => {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Adicionar Nova Tarefa</Text>
      <TextInput
        style={styles.input}
        value={taskTitle}
        onChangeText={setTaskTitle}
        placeholder="Digite o título da tarefa"
        placeholderTextColor="#888"
      />
      <TextInput
        style={[styles.input, { height: 50 }]}
        value={taskDescription}
        onChangeText={setTaskDescription}
        placeholder="Digite a descrição da tarefa"
        placeholderTextColor="#888"
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
    </View>
  );
};

export default TaskForm;
