import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Table} from 'antd';
import axios from "axios";
import 'antd/dist/antd.css';

class Account extends Component{
      onDelete = id => {
        let URL = `http://localhost:8080/delete/${id}`;
        axios.delete(URL).then((response) => 
        this.setState({ 
          array: [...this.state.array.filter((array) => {
              return array.id !== id;
            })]
          })
        )
      }
    
      componentDidMount() {
        this.props.fethAll();
      }
    render(){
      const columns = [
          { 
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
          },
          {
            title: 'Name',
            dataIndex: 'username',
            key: 'username',
            render: text => <a>{text}</a>,
          },
          {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
          }
        ];
        return(
            <Table 
                columns={columns} 
                dataSource={this.props.list}
            />
        )
    }
}

export default Account;