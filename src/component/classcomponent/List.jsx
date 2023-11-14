import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
        <ul className="list-group">

          {
            this.props.todos.length > 0 ? this.props.todos.map((item,index) => (  
            <li className="list-group-item d-flex justify-content-between" key={index}>
              <div> {item}</div>
              <div>
                <button className='btn btn-warning mx-2'  onClick={()=> this.props.editTodo(index,item)}>Edit</button>
                <button className='btn btn-danger' onClick={()=> this.props.deleteTodo(item)}>Delete</button>
              </div>
               </li>
            )) : (<li className="list-group-item">No Todo</li> )
          }
      </ul>
    )
  }
}
