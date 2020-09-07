class Negociacoes {
    private _negociacoes : Negociacao[] = []; //Declaracando um array negociação

    adiciona(negociacao : Negociacao) : void {
        this._negociacoes.push(negociacao);
    }

    paraArray() : Negociacao[] {
        return [].concat(this._negociacoes); // Novo array para evitar que o array possa ser alterado de fora
    }
}