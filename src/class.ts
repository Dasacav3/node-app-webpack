export default class HelloWorld {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    greet(): string {
      return `Hola mundo Webpack en ${this.name}!`;
    }
  }
  