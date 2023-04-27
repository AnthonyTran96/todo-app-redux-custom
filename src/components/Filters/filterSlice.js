import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
    name:'filters',
    initialState:{
        search:'',
        status:'All',
        priorities:[],
    },
    reducers:{
        addSearchText: (state,action)=>{
            state.search=action.payload;
        },
        addStatus:(state,action)=>{
            state.status=action.payload;
        },
        addPriorities: (state,action)=>{
            state.priorities=action.payload;
        }
    }
})