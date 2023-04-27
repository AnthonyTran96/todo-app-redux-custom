import { useState } from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import {v4 as uuidv4} from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo';
import todoSlice from './todoSlice';
import { todosRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
  const dispatch=useDispatch();

  const [searchText,setSearchText]=useState('');
  const [searchPriority,setSearchPriority]=useState('Medium');

  const handleSearchTextChange=(e)=>{
    setSearchText(e.target.value);
  }
  const handlePriorityChange=(value)=>{
    setSearchPriority(value);
  }
  const handleAddTodoBtn=()=>{
    dispatch(todoSlice.actions.addTodo({
      id: uuidv4(),
      name: searchText,
      completed: false,
      priority:searchPriority,
    }))
  }

  const todoList=useSelector(todosRemainingSelector);
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo)=>
          <Todo name={todo.name} 
                prioriry={todo.priority} 
                key={todo.id} id={todo.id} 
                completed={todo.completed}/>
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={searchText} onChange={handleSearchTextChange} />
          <Select defaultValue="Medium" value={searchPriority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodoBtn}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
