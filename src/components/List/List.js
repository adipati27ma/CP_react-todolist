import React, { Component } from 'react'
import { connect } from 'react-redux'


class List extends Component {

  deleteHandler(index) {
    this.props.deleteTodo(index);
  }

  render (){
    return (
      <ul className="list-group">
        {this.props.todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            {todo}
            <button className="btn btn-danger float-right" onClick={(index) => this.deleteHandler(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    )    
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: (index) => dispatch ({type: 'DELETE_TODO', payload: index})
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

// eksport default lama
// export default List;

// eksport default baru dgn connect
export default connect(mapStateToProps, mapDispatchToProps)(List)

// format penulisan connect(mapStateToProps, mapDispatchToProps)(NamaComponent);