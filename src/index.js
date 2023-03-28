const View = require("./ttt-view.js")
const Game = require("../ttt_node/game")

document.addEventListener("DOMContentLoaded", () => {
  // Your code here
  const game = new Game();
  const ttt = document.getElementsByClassName("ttt")[0];
  // console.log(ttt, "ttt");
  const view = new View(game, ttt);
 
});
