import AsyncStorage from "@react-native-async-storage/async-storage";


export interface Task {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'completed';
  }
  
  export const loadTasks = async (): Promise<Task[]> => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      return [];
    }
  };
  
  export const saveTasks = async (tasks: Task[]): Promise<void> => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Erro ao salvar tarefas:', error);
    }
  };
  