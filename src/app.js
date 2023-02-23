const QRPortalWeb = require("@bot-whatsapp/portal");
const WsProvider = require("@bot-whatsapp/provider/baileys");
const DBProvider = require("@bot-whatsapp/database/mock");
const { createBot, createProvider, createFlow } = require("@bot-whatsapp/bot");

const mainFlow = require("./flows/main");
const {
  register_as_a_new_partner,
} = require("./flows/register_as_a_ new_partner");
const { buy_actions } = require("./flows/buy_actions");
const { apply_for_credit } = require("./flows/apply_for_a_credit");
const { create_group } = require("./flows/create_group");
const { pay_dues } = require("./flows/pay_dues");
const { approve_actions } = require("./flows/approve_actions");

const flows = [
  mainFlow,
  register_as_a_new_partner,
  buy_actions,
  apply_for_credit,
  create_group,
  pay_dues,
  approve_actions,
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
  QRPortalWeb();
};

main();
