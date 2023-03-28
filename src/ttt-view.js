class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    this.grid = [];
    for(let i = 0; i < 3; i++) {
      let row = [];
      for(let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.textContent = "hello";
        this.el.appendChild(li);
        row.push(li)
      }
      this.grid.push(row);
    }
  }

  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
