import { MeuObjeto } from "./MeuObjeto";

export class Negociacao implements MeuObjeto<Negociacao> {
    
    constructor (readonly data : Date, readonly quantidade: number , readonly valor: number) {} //readonly para impedir que uma propriedade não seja acessado fora desse cenário. Com isso não precisa ter o método get

   
    get volume() : number {
        return this.quantidade * this.valor;
    }

    paraTexto() : void {
        console.log(
            `Data: ${this.data}
            Quantidade : ${this.quantidade}
            Valor : ${this.valor}
            `
        )
    }

    ehIgual(negociacao:Negociacao) :boolean {
        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}