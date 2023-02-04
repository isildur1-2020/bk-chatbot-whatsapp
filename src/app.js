const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");

const WsProvider = require("@bot-whatsapp/provider/baileys");
const DBProvider = require("@bot-whatsapp/database/mock");

const mainFlow = require("./flows/mainFlow");
const { register_as_a_new_partner } = require("./flows/1");
const { buy_actions } = require("./flows/2");
const { apply_for_credit } = require("./flows/3");

const flows = [
  mainFlow,
  register_as_a_new_partner,
  buy_actions,
  apply_for_credit,
];

const main = async () => {
  const adapterDB = new DBProvider();
  const adapterFlow = createFlow(flows);
  const adapterProvider = createProvider(WsProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb({ name: "bot", port: 34567 });
};

main();
