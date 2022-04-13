import { checkNew, checkState } from "../validation/validation.js"

export default function TodoList({ $target, initialState, onToggled, onRemove }) {
  checkNew(new.target)
  const $todoList = document.createElement('div')
  const $todoListUl = document.createElement("ul")

  $todoList.appendChild($todoListUl)
  $target.appendChild($todoList)

  checkState(initialState)
  this.state = initialState
  this.setState = nextState => {

    checkState(initialState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    $todoListUl.innerHTML = `
      ${this.state
        .map(
          ({ text, isCompleted }, index) => 
          `<li ${isCompleted ? `class="Complete"` : "NotComplete"} 
          data-id=${index}>${text}
          <button>delete</button>
          </li>`
        ).join("")}
    `
  }

  $todoListUl.addEventListener("click", (e) => {
    const $li = e.target.closest("li")
    if (e.target.tagName === "LI") {
      onToggled(parseInt($li.dataset["id"]))
    } else if (e.target.tagName === "BUTTON") {
      onRemove(parseInt($li.dataset["id"]))
    }
  })

  this.render()
}
