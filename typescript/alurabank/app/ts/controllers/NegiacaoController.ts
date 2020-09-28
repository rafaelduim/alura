import { imprime } from "../helpers/index";
// Responsável pela interação com o usuário

import { Negociacao , Negociacoes , NegociacaoParcial } from "../models/index";
import { NegociacoesView , MensagemView } from "../views/index";
import { throttle , domInject } from './../helpers/decorators/index';
import { NegociacaoService } from './../services/index'


// Tipo Element = Elemento do DOM da página
// Tipo HTMLInputElement = Elemento do DOM da página correspondente ao input
// Tipo JQuery instalado a partir do npm i @types/jquery - usando para instaciar os metodos do jquery ao type script
export class NegociacaoController {
    
    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    private _service = new NegociacaoService();

    constructor( ) {
        // LAZY LOAD DOS ELEMENTOS DOM
        // this._inputData = $("#data");
        // this._inputQuantidade = $("#quantidade");
        // this._inputValor = $("#valor");

        this._negociacoesView.update(this._negociacoes);
    }

    // Adicionando um evento ao um método
    adiciona(event : Event) : void{
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g,',')); // o Date só aceita yyyy,mm,dd - replate todos os locais que tiver - para ,
        
        if(!this._ehDiaUtil(data)){
            this._mensagemView.update("Informe um dia útil por favor!");
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        imprime(negociacao,this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }

    private _ehDiaUtil(data:Date){
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo; // getDay() retorna o dia da semana de 0 a 6 onde o 0 é domingo e 6 sábado
    }

    @throttle(500) //para previnir chamadas desnecessária no servidor
    importaDados(event : Event) : void{
        event.preventDefault();
        // valida se foi ok
        // function isOk(res:Response){
        //     if(res.ok){
        //         return res;
        //     }else{
        //         throw new Error(res.statusText);
        //     }
        // }

        this._service
            .obterNegociacao(res => {
                if(res.ok){
                    return res;
                }else{
                    throw new Error(res.statusText);
                }
            })
            .then(negociacoesParaImportar => {
                
                const negociacoesJaImportada = this._negociacoes.paraArray();

                negociacoesParaImportar
                    .filter(negociacao => 
                        !negociacoesJaImportada.some(jaImportada => 
                            negociacao.ehIgual(jaImportada)))
                    .forEach(negociadao => 
                        this._negociacoes.adiciona(negociadao));
                        
                this._negociacoesView.update(this._negociacoes);
            })
        
    }
}

// Uma lista (array) que retorna os números 
enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}