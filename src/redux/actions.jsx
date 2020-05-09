import { ADD_TASK, CHECK_TASK } from './types'

export const addTaskAC = (task) => {
  return {
    type: ADD_TASK,
    task,
  }
}

export const checkTaskAC = (id, date) => {
  return {
    type: CHECK_TASK,
    id,
    date,
  }
}
