const errorCodes = require("../utils/errorCodes");
const lengthValidations = {
  NAME : 25,
  DOCTYPE : 25
}
module.exports = {
  validateLoa: ({ data }) => {
    let errors = [];
    if(!data.name) errors.push(errorCodes.nameRequired);
    if(data.name && data.name.length > lengthValidations.NAME) errors.push(errorCodes.invalidName);
    if(!data.doc_type) errors.push(errorCodes.docTypeRequired);
    if(data.doc_type && data.doc_type.length > lengthValidations.DOCTYPE) errors.push(errorCodes.invalidDoctype);
    
    return errors.length ? errors : false;
  },
  validateUpdateLoa:({data}) => {
    let errors = [];
    if(!data.signature_name) errors.push(errorCodes.signRequired);
    if(!data.signature_font_style) errors.push(errorCodes.fontRequired);
    if(typeof data.is_agree != 'boolean' || data.is_agree != true)
    {
      errors.push(errorCodes.invalidIsAgree);
    }
    return errors.length ? errors : false;
  }
}