import { ADD_TASK, CHECK_TASK } from './types'

const initialState = {
  tasks: {
    '09.05.2020': [
      {
        text: 'Купить слона',
        date: 1588975380000,
        done: false,
        id: 1589031915671,
      },
      {
        text: 'Укусить Льва',
        date: 1588978980000,
        done: false,
        id: 1589031900451,
      },
    ],
    '21.05.2020': [
      {
        text: 'Найти носки',
        date: 1590012180000,
        done: false,
        id: 1589031922433,
      },
    ],

    '22.05.2020': [
      {
        text: 'Устроиться на работу',
        date: 1590177840000,
        done: false,
        id: 1589031932953,
      },
    ],
  },
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const date = new Date(action.task.date).toLocaleDateString()
      if (state.tasks[date]) {
        const tasks = [...state.tasks[date], action.task].sort(
          (firstTask, secondTask) => firstTask.date - secondTask.date
        )
        return {
          tasks: {
            ...state.tasks,
            [date]: tasks,
          },
        }
      }
      return {
        tasks: { ...state.tasks, [date]: [action.task] },
      }
    }
    case CHECK_TASK: {
      const date = new Date(Number(action.date)).toLocaleDateString()
      const tasks = state.tasks[date]
        .map((task) => {
          if (String(task.id) === action.id) {
            return { ...task, done: !task.done }
          }
          return task
        })
        .sort((firstTask, secondTask) => {
          if (+firstTask.done - +secondTask.done === -1) {
            return -1
          }
          if (+firstTask.done - +secondTask.done) {
            return 1
          }
          if (+firstTask.date - +secondTask.date < 0) {
            return -1
          }
          if (+firstTask.date - +secondTask.date) {
            return 1
          }
          if (+firstTask.date - +secondTask.date === 0) {
            return 0
          }
        })
      return {
        tasks: {
          ...state.tasks,
          [date]: tasks,
        },
      }
    }

    default:
      return state
  }
}
