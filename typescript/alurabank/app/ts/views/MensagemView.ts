import { View } from './View'; // Importando a class View

export class MensagemView extends View<string>  {

    template(model : string) : string {
        return `<p class="alert alert-info">${model}</p>`;
        //.join = retorno como string
    }

}