

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
    const hc = this.handleClick.bind(this);
    this.el.addEventListener("click", hc);
  }

  handleClick(e) {
    const target = e.target;
    // console.log(target.attributes['data-pos'].value, "target");
    // const value = JSON.parse(target.attributes['data-pos']);
    // debugger;
    // console.log(value, "value");
    let pos = target.attributes['data-pos'].value;
    let x = parseInt(pos[1]);
    let y = parseInt(pos[3]);
    // debugger;
    // console.log(x)
    this.game.playMove([x, y]);
    this.makeMove(target);
    // if (!this.game.playMove([x, y]) instanceof Error) {
    //   this.makeMove(target);
    // } else {
    //   alert("invalid move!");
    // }
  }

  makeMove(square) {
    let mark = this.game.currentPlayer;
    square.classList.add("white");
    square.innerHTML = mark;
    // square.styl
    square.style.backgroundColor = "white";
  }

}


module.exports = View;
