class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this.nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
