import React, { Component } from 'react'
import { connect } from 'react-redux'
import './addTaskInput.css'
import { addTaskAC } from '../../redux/actions'

class AddTaskInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {},
    }
  }

  submitHandler = () => {
    const { task } = this.state

    if (task.date && task.text) {
      this.props.addTask({
        ...this.state.task,
        done: false,
        id: Date.now(),
        date: new Date(task.date).getTime(),
      })
      this.setState({ task: { text: '', date: '' } })
    }
  }

  onChange = (event) => {
    this.setState({
      task: {
        ...this.state.task,
        [event.target.name]: event.target.value,
      },
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <div>
          <input
            required
            className='task-input'
            value={this.state.task.text}
            onChange={this.onChange}
            type='text'
            name='text'
          />
        </div>
        <div>
          <input
            required
            className='date'
            onChange={this.onChange}
            value={this.state.task.date}
            type='datetime-local'
            name='date'
          />
        </div>
        <div>
          <div className='button' type='submit' onClick={this.submitHandler}>
            Добавить задачу
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (task) => dispatch(addTaskAC(task)),
  }
}

export default connect(null, mapDispatchToProps)(AddTaskInput)
