import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  column: 'To-Do' | 'In-Progress' | 'Completed';
  subtasks: Subtask[];
}

export interface TasksState {
  TaskList: Task[];
}

const initialState = {
  TaskList: [
    {
      id: '1',
      title: 'Task One',  
      description: 'This is a description for Task One',
      column: 'To-Do',
      subtasks: [
        { id: '1', title: 'Subtask One', completed: false },
        { id: '2', title: 'Subtask Two', completed: true },
      ],
    },
    {
      id: '2',
      title: 'Task Two',
      description: 'This is a description for Task Two',
      column: 'In-Progress',
      subtasks: [
        { id: '3', title: 'Subtask Three', completed: false },
        { id: '4', title: 'Subtask Four', completed: true },
      ],
    },
    // More tasks...
  ],
};

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        ...action.payload,
        column: 'To-Do', // Automatically set the column to 'To-Do'
      };
      state.TaskList.push(newTask);
    },
    updateTask: (state, action) => {
      const index = state.TaskList.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.TaskList[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.TaskList = state.TaskList.filter(task => task.id !== action.payload);
    },
    addSubtask: (state, action) => {
      const task = state.TaskList.find(task => task.id === action.payload.taskId);
      if (task) {
        task.subtasks.push(action.payload.subtask);
      }
    },
    updateSubtask: (state, action) => {
      const task = state.TaskList.find(task => task.id === action.payload.taskId);
      if (task) {
        const subtaskIndex = task.subtasks.findIndex(subtask => subtask.id === action.payload.subtask.id);
        if (subtaskIndex !== -1) {
          task.subtasks[subtaskIndex] = action.payload.subtask;
        }
      }
    },
    deleteSubtask: (state, action) => {
      const task = state.TaskList.find(task => task.id === action.payload.taskId);
      if (task) {
        task.subtasks = task.subtasks.filter(subtask => subtask.id !== action.payload.subtaskId);
      }
    },
    moveTask: (state, action) => {
      const task = state.TaskList.find(task => task.id === action.payload.taskId);
      if (task) {
        task.column = action.payload.column;
      }
    },
    toggleSubtaskCompletion: (
      state,
      action: PayloadAction<{ taskId: string; subtaskId: string }>
    ) => {
      const { taskId, subtaskId } = action.payload;
      const task = state.TaskList.find(task => task.id === taskId);
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
  moveTask,
  toggleSubtaskCompletion
} = TasksSlice.actions;

export default TasksSlice.reducer;