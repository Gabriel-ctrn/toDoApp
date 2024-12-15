import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Task } from '../../../models/TaskModel';
import { styles } from './TaskItem.style';

interface TaskItemProps {
  task: Task;
  onToggleStatus: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskItem = ({ task, onToggleStatus, onDelete }: TaskItemProps) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <Text style={styles.taskDescription}>{task.description}</Text>
      <Text style={styles.taskStatus}>
        {task.status === 'completed' ? 'Concluída' : 'Pendente'}
      </Text>
      <TouchableOpacity onPress={() => onToggleStatus(task.id)} style={styles.toggleButton}>
        <Text style={styles.toggleButtonText}>
          {task.status === 'completed' ? 'Marcar como Pendente' : 'Marcar como Concluída'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
