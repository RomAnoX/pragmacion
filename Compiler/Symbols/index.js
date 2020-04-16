import Stream from "../Stream";

class Symbols {
  constructor() {
    this.list = {};
  }

  clear() {
    this.list = {};
  }

  add(symbol, type) {
    if (this.list[symbol.value]) {
      const dataType = symbol.type === "var" ? "variable" : "funcion";
      Stream.fail(`La ${dataType} "${symbol.value}" ya esta definida`);
    }
    this.list[symbol.value] = { type, pos: Stream.position() };
  }

  failIfExist(symbol) {
    if (this.list[symbol.value]) {
      Stream.fail(`${symbol.value} ya esta definida`);
    }
  }

  failIfNotExists(symbol) {
    if (!this.list[symbol.value]) {
      Stream.fail(`${symbol.value} no esta definida`);
    }
  }

  failIfNotNumber(symbol) {
    const variable = this.list[symbol.value];
    if (!variable || variable.type !== "int") {
      Stream.fail(`${symbol.value} no es de tipo numero`);
    }
  }
}

export default new Symbols();
