import Player from "./Player";

let el = document.querySelector("canvas");
if (el) {
  let player = new Player(el, {
    sourceURL: "",
    type: "HEVC",
  });
}
