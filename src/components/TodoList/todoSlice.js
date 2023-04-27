import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:'todoList',
    initialState:[
        {id: 1, name:'Learn React', completed: false, priority: 'High'},
        {id: 2, name:'Learn Redux', completed: true, priority: 'Medium'},
        {id: 3, name:'Learn Yoga', completed: false, priority: 'Low'},
    ],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload);
        },
        toggleStatusChange:(state,action)=>{
            const currentTodo=state.find(todo=>todo.id===action.payload);
            currentTodo.completed=!currentTodo.completed;
        }
    }
})