import { Task } from '@/models/TaskModel';
import TaskForm from '@/components/Tasks/TaskForm/TaskForm';
import TaskItem from '@/components/Tasks/TaskItem/TaskItem';
import { useTaskViewModel } from '@/viewmodels/TaskViewModel';
import React, { useState } from 'react';
import { View, Button, FlatList, Text, Modal, StyleSheet } from 'react-native';
import { styles } from './TaskApp.style';

const TaskApp = () => {
  const {
    tasks,
    taskTitle,
    taskDescription,
    setTaskTitle,
    setTaskDescription,
    addTask,
    toggleTaskStatus,
    deleteTask,
    setFilter,
  } = useTaskViewModel();

  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [isModalVisible, setIsModalVisible] = useState(false);  // Estado para controlar a visibilidade do modal

  const handleFilterChange = (filterType: 'all' | 'pending' | 'completed') => {
    setSelectedFilter(filterType);
    setFilter(filterType);
  };

  // Função para abrir o modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      {/* Botão para abrir o modal com o TaskForm */}
      <View style={styles.button}>
      <Button title="Criar Nova Tarefa" onPress={openModal} color="#007AFF" />
      </View>
      

      {/* Modal que contém o TaskForm */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}  // Torna o fundo do modal semitransparente
        onRequestClose={closeModal}  // Fecha o modal quando o botão de voltar do dispositivo é pressionado
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TaskForm
              taskTitle={taskTitle}
              taskDescription={taskDescription}
              setTaskTitle={setTaskTitle}
              setTaskDescription={setTaskDescription}
              addTask={addTask}
            />
            <Button title="Fechar" onPress={closeModal} color="#FF6347" />
          </View>
        </View>
      </Modal>

      <View style={styles.filterContainer}>
        <Button
          title="Todos"
          onPress={() => handleFilterChange('all')}
          color={selectedFilter === 'all' ? '#007AFF' : '#A1CEDC'}
        />
        <Button
          title="Pendentes"
          onPress={() => handleFilterChange('pending')}
          color={selectedFilter === 'pending' ? '#007AFF' : '#A1CEDC'}
        />
        <Button
          title="Concluídas"
          onPress={() => handleFilterChange('completed')}
          color={selectedFilter === 'completed' ? '#007AFF' : '#A1CEDC'}
        />
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }: { item: Task }) => (
          <TaskItem task={item} onToggleStatus={toggleTaskStatus} onDelete={deleteTask} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TaskApp;
