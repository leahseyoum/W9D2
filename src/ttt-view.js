

class View {
  constructor(game, el) {
    // console.log(el, "el");
    this.game = game;

    this.el = el;
    
    // this.el.appendChild(ul);

    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    
    const ul = document.createElement("ul");
    this.el.appendChild(ul);
    for(let i = 0; i < 3; i++) {
      
      for(let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.dataset.pos = JSON.stringify([i,j]);
        ul.appendChild(li);
      }
    }
  }
  
  bindEvents() {
    // EventTarget.addEvenetListener()
    // game.playMove()
    this.el.addEventListener("click", this.handleClick);
  }

  handleClick(e) {
    const target = e.target;
    // console.log(target.attributes['data-pos'].value, "target");
    const value = target.attributes['data-pos'].value;
    // debugger;
    console.log(Array.from(value), "Array?");
    this.game.playMove(value);
  }

  makeMove(square) {}

}


module.exports = View;
