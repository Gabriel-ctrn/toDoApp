import { useState, useEffect } from 'react';
import { loadTasks, saveTasks } from '../models/TaskModel';
import { Task } from '../models/TaskModel';

export const useTaskViewModel = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  useEffect(() => {
    const fetchTasks = async () => {
      const loadedTasks = await loadTasks();
      setTasks(loadedTasks);
    };
    fetchTasks();
  }, []);

  const save = async (updatedTasks: Task[]) => {
    await saveTasks(updatedTasks);
    setTasks(updatedTasks);
  };

  const addTask = () => {
    if (!taskTitle || !taskDescription) return;
    const newTask: Task = {
      id: Math.random().toString(),
      title: taskTitle,
      description: taskDescription,
      status: 'pending',
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

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    save(updatedTasks);
  };

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
