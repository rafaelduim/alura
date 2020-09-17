System.register(["./controllers/NegiacaoController"], function (exports_1, context_1) {
    "use strict";
    var NegiacaoController_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegiacaoController_1_1) {
                NegiacaoController_1 = NegiacaoController_1_1;
            }
        ],
        execute: function () {
            controller = new NegiacaoController_1.NegociacaoController();
            $(".form").submit(controller.adiciona.bind(controller));
        }
    };
});
