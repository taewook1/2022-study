import { checkNew } from "../validation/validation.js"

export default function TodoForm({ $target, onSubmit }) {
  checkNew(new.target)
  const $form = document.createElement('form')

  $target.appendChild($form)

  let isInit = false

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo"/>
      <button>Add</button>
    `

    if (!isInit) {
      $form.addEventListener('submit', e => {
        e.preventDefault()

        const $todo = $form.querySelector('input[name=todo]')
        const text = $todo.value
        
        if (text.length > 1) {
          $todo.value = ''
          onSubmit(text)
        }
      })
      isInit = true
    }
  }
  this.render()
}
