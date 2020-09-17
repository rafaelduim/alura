export class Negociacao {
    
    constructor (readonly data : Date, readonly quantidade: number , readonly valor: number) {} //readonly para impedir que uma propriedade não seja acessado fora desse cenário. Com isso não precisa ter o método get

   
    get volume() : number {
        return this.quantidade * this.valor;
    }
}