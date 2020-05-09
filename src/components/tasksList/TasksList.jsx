import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkTaskAC } from '../../redux/actions'
import './tasksList.css'

class TasksList extends Component {
  onChecked = (event) => {
    this.props.checkTask(event.target.id, event.target.dataset.date)
  }

  render() {
    return (
      <div className='list-wrapper'>
        {this.props.tasks
          ? Object.keys(this.props.tasks).map((date) => (
              <div>
                <div className='task-date'>{date}</div>
                {this.props.tasks[date].map((task) => {
                  return (
                    <div className='list-item'>
                      <label className='checkbox-container'>
                        <input
                          className='checkbox'
                          id={task.id}
                          data-date={task.date}
                          type='checkbox'
                          onChange={this.onChecked}
                          checked={task.done}
                        />
                        <span className='checkmark'></span>
                      </label>
                      <div className='task-time'>
                        {new Date(task.date).toLocaleTimeString('ru-RU', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                      <div className={task.done && 'text-done'}>
                        {task.text}
                      </div>
                    </div>
                  )
                })}
                <hr />
              </div>
            ))
          : null}
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    tasks: store.tasks,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    checkTask: (id, date) => dispatch(checkTaskAC(id, date)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
