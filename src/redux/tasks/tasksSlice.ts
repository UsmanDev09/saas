import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

interface Task {
  id: string;
  title: string;
  description: string;  // New field
  subtasks: Subtask[];
}

interface TasksState {
  taskList: Task[];
}

const initialState: TasksState = {
  taskList: [
    {
      id: 'task1',
      title: 'Task 1',
      description: 'Description for Task 1',  // New field
      subtasks: [
        { id: 'subtask1-1', title: 'Subtask 1.1', completed: false },
        { id: 'subtask1-2', title: 'Subtask 1.2', completed: true },
      ],
    },
    {
      id: 'task2',
      title: 'Task 2',
      description: 'Description for Task 2',  // New field
      subtasks: [
        { id: 'subtask2-1', title: 'Subtask 2.1', completed: false },
        { id: 'subtask2-2', title: 'Subtask 2.2', completed: false },
      ],
    },
  ],
};


const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const newTask: Task = { ...action.payload, id: uuidv4() };
      state.taskList.push(newTask);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { id, title, description, subtasks } = action.payload;
      const existingTask = state.taskList.find(task => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.description = description;  // Update description
        existingTask.subtasks = subtasks;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.filter(task => task.id !== action.payload);
    },
    addSubtask: (
      state,
      action: PayloadAction<{ taskId: string; subtask: Subtask }>
    ) => {
      const { taskId, subtask } = action.payload;
      const task = state.taskList.find(task => task.id === taskId);
      if (task) {
        task.subtasks.push(subtask);
      }
    },
    updateSubtask: (
      state,
      action: PayloadAction<{ taskId: string; subtask: Subtask }>
    ) => {
      const { taskId, subtask } = action.payload;
      const task = state.taskList.find(task => task.id === taskId);
      if (task) {
        const existingSubtask = task.subtasks.find(st => st.id === subtask.id);
        if (existingSubtask) {
          existingSubtask.title = subtask.title;
          existingSubtask.completed = subtask.completed;
        }
      }
    },
    deleteSubtask: (
      state,
      action: PayloadAction<{ taskId: string; subtaskId: string }>
    ) => {
      const { taskId, subtaskId } = action.payload;
      const task = state.taskList.find(task => task.id === taskId);
      if (task) {
        task.subtasks = task.subtasks.filter(st => st.id !== subtaskId);
      }
    },
    toggleSubtaskCompletion: (
      state,
      action: PayloadAction<{ taskId: string; subtaskId: string }>
    ) => {
      const { taskId, subtaskId } = action.payload;
      const task = state.taskList.find(task => task.id === taskId);
      if (task) {
        const subtask = task.subtasks.find(subtask => subtask.id === subtaskId);
        if (subtask) {
          subtask.completed = !subtask.completed;
        }
      }
    },
  },
});

export const {
  addTask,
  updateTask,
  deleteTask,
  addSubtask,
  updateSubtask,
  deleteSubtask,
  toggleSubtaskCompletion,
} = tasksSlice.actions;

export default tasksSlice.reducer;  