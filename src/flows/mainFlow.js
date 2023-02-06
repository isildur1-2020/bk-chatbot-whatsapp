const { addKeyword } = require("@bot-whatsapp/bot");
console.log("hello");

const KEYWORDS = [
  "inicio",
  "menu",
  "menú",
  "Menú principal",
  "ayuda",
  "bot",
  "chatbot",
  "chat",
];

const ANSWERS = [
  "*_Bienvenido a nuestro chatbot !_*",
  "\n_Por favor, da click en una opción:_\n",
];

const OPTIONS = [
  "Registrarme como nuevo socio",
  "Comprar acciones",
  "Solicitar crédito",
];

const config = {
  sensitive: true,
  capture: true,
  buttons: OPTIONS.map((body) => ({ body })),
};

const mainFlow = addKeyword(KEYWORDS).addAnswer(ANSWERS, config);

module.exports = mainFlow;
