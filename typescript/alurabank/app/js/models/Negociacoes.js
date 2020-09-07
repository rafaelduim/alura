class Negociacoes {
    constructor() {
        this._negociacoes = []; //Declaracando um array negociação
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes); // Novo array para evitar que o array possa ser alterado de fora
    }
}
