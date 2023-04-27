import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import filterSlice from './filterSlice';
import { useState } from 'react';

const { Search } = Input;

export default function Filters() {
  const dispatch=useDispatch();
  const [searchText,setSearchText]=useState('');
  const [searchStatus,setSearchStatus]=useState('All');
  const [searchPriorities,setSearchPriorities]=useState([]);

  const handleSearchTextChange=(e)=>{
    setSearchText(e.target.value);
    dispatch(filterSlice.actions.addSearchText(e.target.value));
  }
  const handleSearchStatusChange=(e)=>{
    setSearchStatus(e.target.value);
    dispatch(filterSlice.actions.addStatus(e.target.value));
  }
  const handleSearchPrioritiesChange=(value)=>{
    setSearchPriorities(value);
    dispatch(filterSlice.actions.addPriorities(value));
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={searchStatus} onChange={handleSearchStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={searchPriorities}
          onChange={handleSearchPrioritiesChange}
        >
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
      </Col>
    </Row>
  );
}
