export default function TodoCount({ $target, initialState }) {
  if (!this) {
    return new TodoCount({ $target, initialState })
  }
  const $todoCount = document.createElement("div")
  
  $target.appendChild($todoCount)

  this.state = initialState
  this.setState = (nextState) => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const totalList = this.state.length
    const completedList = this.state.filter((todo) => todo.isCompleted).length

    $todoCount.innerHTML = `
      <span class="Count">Complete${completedList}
      <br> 
      Total${totalList}</span>
    `
  }

  this.render()
}
