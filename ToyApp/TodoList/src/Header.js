import { checkNew } from "../validation/validation.js"

export default function Header({ $target, text }) {
  checkNew(new.target)
  const $header = document.createElement('h1')

  $target.appendChild($header)

  this.render = () => {
    $header.textContent = text
  }

  this.render()
}
