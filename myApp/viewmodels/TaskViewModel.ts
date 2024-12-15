import { useState, useEffect } from 'react';
import { loadTasks, saveTasks } from '../models/TaskModel';
import { Task } from '../models/TaskModel';

export const useTaskViewModel = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  // Carregar tarefas ao inicializar o ViewModel
  useEffect(() => {
    const fetchTasks = async () => {
      const loadedTasks = await loadTasks();
      setTasks(loadedTasks);
    };
    fetchTasks();
  }, []);

  // Salvar tarefas no AsyncStorage
  const save = async (updatedTasks: Task[]) => {
    await saveTasks(updatedTasks);
    setTasks(updatedTasks);
  };

  // Adicionar tarefa
  const addTask = () => {
    if (!taskTitle || !taskDescription) return;
    const newTask: Task = {
      id: Math.random().toString(),
      title: taskTitle,
      description: taskDescription,
      status: 'pending', // status com valor correto
    };
    const updatedTasks = [...tasks, newTask];
    save(updatedTasks);
    setTaskTitle('');
    setTaskDescription('');
  };

  const toggleTaskStatus = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const newStatus: 'pending' | 'completed' = task.status === 'pending' ? 'completed' : 'pending';
        return { ...task, status: newStatus };
      }
      return task;
    });
    save(updatedTasks);
  };
  

  // Excluir tarefa
  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    save(updatedTasks);
  };

  // Filtrar tarefas com base no status
  const filterTasks = () => {
    if (filter === 'all') return tasks;
    return tasks.filter((task) => task.status === filter);
  };

  return {
    tasks: filterTasks(),
    taskTitle,
    taskDescription,
    setTaskTitle,
    setTaskDescription,
    addTask,
    toggleTaskStatus,
    deleteTask,
    setFilter,
  };
};
