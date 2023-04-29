import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name:'todoList',
    initialState:{
        status: 'idle',
        todos: [],
    },
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload);
        },
        toggleStatusChange:(state,action)=>{
            const currentTodo=state.find(todo=>todo.id===action.payload);
            currentTodo.completed=!currentTodo.completed;
        }
    },
    extraReducers: builer =>{
        builer
            .addCase(fetchTodos.pending, (state)=>{
                state.status='loading';
            })
            .addCase(fetchTodos.fulfilled, (state,action)=>{
                state.status='idle';
                state.todos=action.payload;
            })
            .addCase(addNewTodo.fulfilled, (state,action)=>{
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action)=>{
                let currentTodo=state.todos.find((todo)=> todo.id===action.payload);
                // eslint-disable-next-line
                currentTodo=action.payload;
            })
    }
})

export const fetchTodos= createAsyncThunk('todos/fetchTodos', async()=>{
    const res=await fetch('/api/todos');
    const data= await res.json();
    return data.todos;
});

export const addNewTodo=createAsyncThunk('todos/addNewTodo', async (newTodo)=>{
    const res= await fetch('/api/todos',{
        method: 'POST',
        body: JSON.stringify(newTodo)
    });
    const data=await res.json();
    return data.todos;
})

export const updateTodo=createAsyncThunk('todos/updateTodo', async(updatedTodo)=>{
    const res=await fetch('/api/updateTodo',{
        method: 'POST',
        body: JSON.stringify(updatedTodo),
    });
    const data=await res.json();
    return data.todos;
})

export default todoSlice;

// export function addTodo(todo){
//     return function addTodosThunk(dispatch,getState){
//         console.log('addTodosThunk', getState());
//         console.log({todo});
//         todo.name='QuangTD Test';
//         dispatch(todoSlice.actions.addTodo(todo));
//         console.log('addTodosThunk after', getState());
//     }
// }