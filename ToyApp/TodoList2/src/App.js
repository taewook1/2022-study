import TodoList from './TodoList.js'
import TodoComments from './TodoComments.js'

export default function ({ $app }) {
  const todoList = new TodoList ({
    $target : $app,
    initialState : [
      {
        text : 'React'
      },
      {
        text : 'JavaScript'
      }
    ]
  })
  
  const todoComments = new TodoComments ({
    $target : $app,
    initialState : {
      selectedTodo : {
        text : 'Learn'
      },
      comment : [
        {
          text : '반가워요'
        },
        {
          text : '안녕하세요'
        } 
      ]
    }
  })
}