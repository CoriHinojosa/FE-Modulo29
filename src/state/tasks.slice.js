import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=10');
    return response.data.slice(0, 8);
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            return { tasks: state.tasks.filter(task => task.id !== action.payload) };
        }
    },

    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, (state, action) => {
                console.log("pending: ", action);
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                console.log("fulfilled: ",action);
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                console.log("rejected: ",action);
            })
    }
});

export const { addTask, removeTask } = taskSlice.actions;

const { reducer: tasksReducer } = taskSlice;
export default tasksReducer;

/*
            {
                id:1,
                title:'...',
                price:'...',
                category:'...',
                description:'...',
                image:'...'
            }

            
*/