class Pessoa{
    private _nome: string;

    constructor(nome:string){
        this._nome=nome;
    }

    public get nome(): string{
        return this.nome;
    }

    public set nome(nome:string){
        this._nome=nome;
    }
}