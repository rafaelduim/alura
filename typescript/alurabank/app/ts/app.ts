import { NegociacaoController } from "./controllers/NegiacaoController"

const controller = new NegociacaoController();
// // Adicionando o método a função
// document
//     .querySelector(".form")
//     .addEventListener("submit", controller.adiciona.bind(controller)); //.bind para manter o this dentro do controller

$(".form").submit(controller.adiciona.bind(controller));