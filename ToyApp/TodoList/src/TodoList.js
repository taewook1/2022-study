// params.$target - 해당 컴포넌트가 추가가 될 DOM 엘리먼트
// params.initalState - 해당 컴포넌트의 초기 상태
function TodoList({ $target, initialState }) {
  const $todoList = document.createElement('div');

  $target.appendChild($todoList);

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState
    this.render()
  }

  this.render = () => {
      // this.state = [{ text: '자바스크립트 공부하기'}, { text: '....'}]
      
      // map을 돈 이후에는 아래처럼 만들어집니다.
      /*
      *   this.state.map(todo => `<li>${todo.text}</li>`)
      *   [{text: '자바스크립트 공부하기'}, {text: '....'}] ....
      *   ['<li>자바스크립트 공부하기</li>', <li>....</li>]  
      *   join('')
      *   <li>자바스크립트 공부하기</li><li>.....</li>      
      */
      $todoList.innerHTML = `
      <ul>
          ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
      </ul>
      `
  }

  this.render();
}