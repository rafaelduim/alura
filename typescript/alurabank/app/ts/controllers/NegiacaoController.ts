// Responsável pela interação com o usuário

import { Negociacao , Negociacoes } from "../models/index";
import { NegociacoesView , MensagemView } from "../views/index";


// Tipo Element = Elemento do DOM da página
// Tipo HTMLInputElement = Elemento do DOM da página correspondente ao input
// Tipo JQuery instalado a partir do npm i @types/jquery - usando para instaciar os metodos do jquery ao type script
export class NegociacaoController {
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    constructor( ) {
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    // Adicionando um evento ao um método
    adiciona(event : Event) : void{
        event.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g,',')), // o Date só aceita yyyy,mm,dd - replate todos os locais que tiver - para ,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}