import { Negociacao , NegociacaoParcial } from './../models/index';

export class NegociacaoService {
    obterNegociacao(handler: HandlerFunction): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res =>handler(res))
            .then(res => res.json())
            .then((dados:NegociacaoParcial[]) => 
                dados
                .map(dado => new Negociacao(new Date(),dado.vezes,dado.montante))
            )
            .catch(err => {
                throw new Error(err)
            } )
            
    }
}

export interface HandlerFunction {
    (res: Response) : Response //Declarando uma interface para proteger que a HanderFunction tem que receber um responde e responda um respone
}