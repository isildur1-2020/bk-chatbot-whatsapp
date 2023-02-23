const bkPath = {
  register_as_a_new_partner: "Registrarme como nuevo socio",
  buy_actions: "Comprar acciones",
  apply_for_credit: "Solicitar crédito",
  create_group: "Crear un nuevo grupo",
  pay_dues: "Pagar cuotas",
  approve_actions: "Aprobar compra de acciones",
};

const bkPathAPI = {
  getUserExists: "/userExists",
  registerUser: "/registerUser",
  getUserActions: "/getUserActionsToBuy",
  postBuyActions: "/buy-actions",
  getUserCredit: "/getUserCreditToApply",
  applyForCredit: "/apply-for-credit",
  createGroup: "/createGroup",
  getApproveActionsInfo: "/approveActionsInfo",
  getAdminExists: "/adminExists",
  getUserActionsExists: "/userActionsExists",
  approveActions: "/approveActions",
};

module.exports = {
  bkPath,
  bkPathAPI,
};
