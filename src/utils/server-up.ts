import { Express } from 'express';
import * as http from 'http';
import * as https from 'https';

export class ServerUP {
  static #app: Express;

  static set app(e: Express) {
    this.#app = e;
  }

  static get https() {
    return https.createServer(ServerUP.#app);
  }

  static get http() {
    return http.createServer(ServerUP.#app);
  }
}
