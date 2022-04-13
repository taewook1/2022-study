import Header from "./Header.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import TodoCount from "./TodoCount.js"
import { setItem } from "./storage.js"
import { checkNew, checkState } from "../validation/validation.js"

export default function App({ $target, initialState }) {
  checkNew(new.target)
  checkState(initialState)

  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    todoList.setState(this.state)
    setItem("todos", JSON.stringify(nextState))
    todoCount.setState(nextState)
  }

  new Header ({ 
    $target, 
    text: 'What to do Today?'
  })

  new TodoForm({
    $target,
    onSubmit: (text) => {
      this.setState([...this.state, { text, isCompleted: false }])
    }
  })

  const todoList = new TodoList({
    $target,
    initialState,
    onToggled: (id) => {
      const nextState = this.state.map((todo, index) =>
        index === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)

      this.setState(nextState)
      todoCount.setState(nextState)
    },
    onRemove: (id) => {
      const nextState = this.state.filter((todo, index) => index !== id)
      
      this.setState(nextState)
      todoCount.setState(nextState)
    },
  })
  const todoCount = new TodoCount({ $target, initialState})
}
