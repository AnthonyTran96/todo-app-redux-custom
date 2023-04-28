import {createServer} from 'miragejs';

export const setupServer=()=>{
    let server = createServer()
    server.get("/api/todos", { todos: [
        {id: 1, name:'Learn React', completed: false, priority: 'High'},
        {id: 2, name:'Learn Redux', completed: true, priority: 'Medium'},
        {id: 3, name:'Learn Yoga', completed: false, priority: 'Low'},
    ] })
}