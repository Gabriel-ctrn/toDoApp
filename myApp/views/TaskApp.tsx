import { Task } from '@/models/TaskModel';
import TaskForm from '@/components/Tasks/TaskForm/TaskForm';
import TaskItem from '@/components/Tasks/TaskItem/TaskItem';
import { useTaskViewModel } from '@/viewmodels/TaskViewModel';
import React, { useState } from 'react';
import { View, Button, FlatList, Text, StyleSheet } from 'react-native';
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

  const handleFilterChange = (filterType: 'all' | 'pending' | 'completed') => {
    setSelectedFilter(filterType);
    setFilter(filterType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>

      <TaskForm
        taskTitle={taskTitle}
        taskDescription={taskDescription}
        setTaskTitle={setTaskTitle}
        setTaskDescription={setTaskDescription}
        addTask={addTask}
      />

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
