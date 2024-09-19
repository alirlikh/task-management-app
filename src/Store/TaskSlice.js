import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = "https://dummyjson.com/todos"
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
})

export const fetchOneTask = createAsyncThunk("tasks/fetchOneTask", async (taskId) => {
  const response = await axios.get(`${API_URL}/${taskId}`)
  return response.data
})

export const addTask = createAsyncThunk("tasks/createTasks", async (task) => {
  const response = await axios.post(`${API_URL}/add`, task)
  return response.data
})

export const editTask = createAsyncThunk("tasks/editTask", async (task) => {
  const { id, ...taskObj } = task
  const updatedTask = { ...taskObj }
  const response = await axios.put(`${API_URL}/${id}`, updatedTask)
  return response.data
})

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (taskId) => {
  await axios.delete(`${API_URL}/${taskId}`)
  return taskId
})

export const markAsRead = createAsyncThunk("tasks/markAsRead", async (task) => {
  const { id, ...taskObj } = task
  const updatedTask = { ...taskObj, completed: true }
  const response = await axios.put(`${API_URL}/${task.id}`, updatedTask)
  return response.data
})

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    status: "idle",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.items = action.payload.todos
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(fetchOneTask.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchOneTask.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.items.push(action.payload)
      })
      .addCase(fetchOneTask.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(addTask.pending, (state) => {
        state.status = "loading"
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.items.push(action.payload)
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
      .addCase(editTask.fulfilled, (state, action) => {
        const index = state.items.findIndex((task) => task.id === action.payload.id)
        if (index !== -1) {
          state.items[index] = action.payload
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((task) => task.id !== action.payload)
      })
      .addCase(markAsRead.fulfilled, (state, action) => {
        const index = state.items.findIndex((task) => task.id === action.payload.id)
        if (index !== -1) {
          state.items[index].completed = true
        }
      })
  }
})

export default tasksSlice.reducer
