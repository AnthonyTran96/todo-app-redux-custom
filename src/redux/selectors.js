import {createSelector} from '@reduxjs/toolkit';

export const todoListSelector = state=> state.todoList;
export const searchTextSelector = state=> state.filters.search;
export const searchStatusSelector=state=> state.filters.status;
export const searchPrioritiesSelector=state=> state.filters.priorities;

export const todosRemainingSelector=createSelector(
    todoListSelector,
    searchTextSelector,
    searchStatusSelector,
    searchPrioritiesSelector,
    (todoList,searchText,status,priorities)=>{
        return todoList.filter(todo=>{
            if (!todo.name.includes(searchText)) return false;
            if (!priorities.includes(todo.priority) && priorities.length>0) return false;
            if (status==='Completed' && !todo.completed) return false;
            if (status==='Todo' && todo.completed) return false;
            return true;
        })
    })