const { bkPath } = require("../../utils/bkPath");
const userForm = {
  action: bkPath.register_as_a_new_partner,
  typeOfId: "",
  id: "",
  name: "",
  lastname: "",
  gender: "",
  dateOfBirth: {
    year: "",
    month: "",
    day: "",
  },
  email: "",
  phone: "",
  state: "",
  town: "",
  scholarship: "",
  job: "",
  groupCode: "",
  groupName: "",
  groupCountry: "",
};

module.exports = { userForm };
