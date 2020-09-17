export abstract class View<T> { // class abstrata não pode ser instanciada
    protected _elemento : JQuery;
    private _escapar : boolean;
    
    constructor(private _seletor : string , escapar? : boolean) {
        this._elemento = $(_seletor);
        this._escapar = escapar;
    }
    
    abstract template(modal : T) : string; //Método que precisa ser implementado em uma classe q herda


    update(model : T ) : void {
        let template = this.template(model);
        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/g,'');
        }
        
        this._elemento.html(template);
    } 
}
