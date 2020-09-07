class View {
    constructor(_seletor) {
        this._seletor = _seletor;
        this._elemento = document.querySelector(_seletor);
    }
    template(modal) {
        throw new Error("Você deve implementar o método template");
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
