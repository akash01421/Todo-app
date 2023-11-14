import React, { Component } from 'react'

export default class Input extends Component {
  constructor(){
    super();

    this.state={
      todo:''
    }
  }

  submit =(event) =>{
    event.preventDefault();
    if(this.props.edit){
        this.props.updateTodo(this.props.editData.index , this.state.todo)
    }else{
      this.props.addTodo(this.state.todo);
    }
    this.setState({
      todo:''
    })
  } 

   componentDidUpdate(prevProps ){
    if(prevProps.editData.index !== this.props.editData.index){
      this.setState({
        todo: this.props.editData.data
      })
    }
   }

  render() {
    return (
        <form className="row g-3" onSubmit={this.submit}>
        <div className="col-10">
          <input type="text" 
          placeholder='enter todo'
         className="form-control" 
          value={this.state.todo}
          onChange={(event) => this.setState({
            todo:event.target.value
          })}/>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-primary mb-3"> {this.props.edit ? "update" : "Add"} </button>
        </div>
      </form>
    )
  }
}
