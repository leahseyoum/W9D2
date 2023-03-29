

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
    this.hc = this.handleClick.bind(this);
    this.el.addEventListener("click", this.hc);
  }

  handleClick(e) {
    const target = e.target;
    this.makeMove(target);

    
  }

  makeMove(square) {

    let pos = square.attributes['data-pos'].value;
    let x = parseInt(pos[1]);
    let y = parseInt(pos[3]);

    let mark = this.game.currentPlayer;

    try {
      this.game.playMove([x, y]);
    }
    catch(error){
      alert(error.msg);
    }
    // debugger;
    if(this.game.isOver() && this.game.winner()) {
      console.log(`congratulations ${this.game.winner()}!`);
      this.el.removeEventListener("click", this.hc);
    }

    square.classList.add("white");
    square.innerHTML = mark;
    // square.styl
  //   square.style.backgroundColor = "white";
  }

}


module.exports = View;
