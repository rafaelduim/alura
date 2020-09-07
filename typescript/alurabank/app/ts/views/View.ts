class View<T> {
    protected _elemento : Element;
    
    constructor(private _seletor : string) {
        this._elemento = document.querySelector(_seletor);
    }
    
    template(modal : T) : string {
        throw new Error("Você deve implementar o método template");
    }


    update(model : T ) : void {
        this._elemento.innerHTML = this.template(model);
    }
}