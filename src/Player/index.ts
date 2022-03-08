import BaseClass from "./base/BaseClass";
import getEvents from "./toolkit/Events.js";

export interface IOptions {
  sourceURL: string;
  type: "HEVC";
  debug?: boolean;
  events?: any[];
}
type IEl = HTMLCanvasElement | null;
class Player extends BaseClass {
  public options: IOptions;
  constructor(el: IEl, options: IOptions) {
    super(options);
    this.options = options;
    this.options.events = getEvents();
    if (!el) {
      this.logger.error("请正确初始化");
    }
    this.init();
  }
  init() {
    this.bindEvents();
    fetch(
      "https://p1.adkwai.com/kos/nlav10790/template-static/hevc/feixingyuan.hevc",
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.arrayBuffer();
      })
      .then((buffer) => {
        this.events.emit("videoAsyncLoad", buffer);
      });
  }
  bindEvents() {
    this.events.on("videoAsyncLoad", (buffer: ArrayBuffer) => {
      console.log(buffer);
    });
  }
}
export default Player;
