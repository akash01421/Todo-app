import React, { Component } from 'react'
import List from './component/classcomponent/List'
import Input from './component/classcomponent/Input'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default class App extends Component {
  constructor(){
    super();

       this.state={
        todos:['breakfast' ,'lunch' , 'dinner' , 'snacks'],
         edit:false,
          editData: {
            index:'',
            data: ''
          }
       }
  }

  addTodo =(todo) =>{
  this.setState({
    todos:[...this.state.todos,todo]
  })
  }

  deleteTodo = (todo) =>{
    let afterDeleteTodo =this.state.todos.filter(item => item !==todo)

    this.setState({
      todos: afterDeleteTodo
    })
  }

  editTodo = (index ,data)=>{
  this.setState({
    editData:{
      index,
      data
    }, 
    edit:true
  })
  }
  updatetodo =(index ,data) =>{
    this.state.todos.splice(index , 1, data)
    this.setState({
      todos: [...this.state.todos],
      edit:false
    })
  }

  render() {
    return (
      <div className='container mt-4'>
            <Input addTodo={this.addTodo} editData ={this.state.editData} edit ={this.state.edit}
            updateTodo ={this.updatetodo} />
              <List todos ={this.state.todos} deleteTodo ={this.deleteTodo} editTodo ={this.editTodo} />
         </div>
    )
    }
  }
 