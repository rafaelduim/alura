// Responsável pela interação com o usuário
// Tipo Element = Elemento do DOM da página
// Tipo HTMLInputElement = Elemento do DOM da página correspondente ao input
class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }
    // Adicionando um evento ao um método
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), // o Date só aceita yyyy,mm,dd - replate todos os locais que tiver - para ,
        parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        console.log(negociacao);
    }
}
