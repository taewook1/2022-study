export default function TodoComments({ $target, initialState, onClick }) {
  const $element = document.createElement('div')
  $target.appendChild($element)

  this.state = initialState

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }
  
  this.render = () => {
    const { selectedTodo, comment} = this.state

    $element.innerHTML = `
    <h2>${selectedTodo.text}μ λκΈ</h2>
    <ul>
      ${comment.map(({ text }) => `<li>${text}</li>`).join('')}
    </ul>
    `
  }

  this.render()
}