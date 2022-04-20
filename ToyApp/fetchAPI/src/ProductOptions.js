export default function ProductOptions({ $target, initialState, onSelect }) {
  const  $select = document.createElement('select')

  $target.appendChild($select)


  this.state = initialState
  
  this.setState = (nextState) => {
    this.state = nextState
    this.render() 
  }

  const createOptionFullName =  ({ optionName, optionPrice, stock }) => {
    return `${optionName} ${optionPrice > 0 ? `옵션가 ${optionPrice}` : ''} | ${stock > 0 ? `재고 ${stock}` : '재고 없음'}`
  }

  this.render = () => {
    if (this.state && Array.isArray(this.state)) {
      $select.innerHTML = `
      ${this.state.map(option => `<option value="${option.id}">${createOptionFullName(option)}</option>`).join('')}
      `
    }
  }

  this.render()
}