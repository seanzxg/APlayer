/**
 * @copyright: Copyright (C) 2019
 * @desc: base class of all service
 * @author: Jarry
 * @file: BaseClass.js
 */

import getEvents from "../toolkit/Events";
import Logger from "../toolkit/Logger";
class BaseClass {
  public logger: any = null;
  public options: any;
  public debug: boolean = false;
  constructor(options: any) {
    this.options = options;
    this.debug = options.debug || false;
    this.setLogger(this.constructor.name + ".js");
  }

  setLogger(file: any) {
    this.logger = new Logger(file);
  }

  getLogger() {
    return this.logger;
  }

  setOptions(options: any) {
    Object.assign(this.options, options);
  }

  get events() {
    if (this.options && this.options.events) {
      return this.options.events(this);
    }
    return getEvents(this);
  }
  get alert() {
    let res = "";
    if (this.options && this.options.alertError) {
      res = this.options.alertError;
    }
    return res;
  }

  toString() {
    return JSON.stringify(this);
  }
}

export default BaseClass;
