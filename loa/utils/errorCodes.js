module.exports = {
  idRequired: {
    field: "id",
    message: "Id is required.",
    code: "CG-001"
  },
  idInvalid: {
    field: "id",
    message: "Invalid id, only positive integer expected.",
    code: "CG-002"
  },
  accountNotFound : {
    field : "team_id",
    message : "Account not found.",
    coe: "CG-003"
  },
  nameRequired : {
    field : "name",
    message : "Name is required.",
    code: "CG-004"
  },
  invalidName : {
    field : "name",
    message : "Name length exceeded.",
    code: "CG-005"
  },
  companyNameRequired : {
    field : "company_name",
    message : "Company name is required.",
    code: "CG-006"
  },
  invalidCompanyName : {
    field : "company_name",
    message : "Company name length exceeded.",
    code: "CG-007"
  },
  invalidAuthorizedIndividual : {
    field : "authorized_individual",
    message : "Authorized individual length exceeded.",
    code: "CG-008"
  },
  currentTelecomBillRequired : {
    field : "current_telecom_bill_s3_filename",
    message : "Current telecom bill file name is required.",
    code: "CG-009"
  },
  invalidCurrentTelecomBill : {
    field : "current_telecom_bill_s3_filename",
    message : "Current telecom bill file name length exceeded.",
    code: "CG-010"
  },
  billingTelephoneRequired : {
    field : "billing_telephone",
    message : "Billing telephone number is required.",
    code: "CG-011"
  },
  invalidBillingTelephone : {
    field : "billing_telephone",
    message : "Invalid format for billing telephone number, string of phone number is expected.",
    code: "CG-012"
  },
  streetAddressRequired : {
    field : "street_address",
    message : "Address line  is required.",
    code: "CG-013"
  },
  invalidStreetAddress : {
    field : "street_address",
    message : "Address line length exceeded.",
    code: "CG-014"
  },
  invalidStreetAddress2 : {
    field : "street_address_2",
    message : "Address line 2 length exceeded.",
    code: "CG-015"
  },
  cityRequired : {
    field : "city",
    message : "City  is required.",
    code: "CG-016"
  },
  invalidCity : {
    field : "city",
    message : "City length exceeded.",
    code: "CG-017"
  },
  stateRequired : {
    field : "state",
    message : "State  is required.",
    code: "CG-018"
  },
  invalidState : {
    field : "state",
    message : "State length exceeded.",
    code: "CG-019"
  },
  postalCodeRequired : {
    field : "postal_code",
    message : "Postal code  is required.",
    code: "CG-020"
  },
  invalidPostalCode : {
    field : "postal_code",
    message : "Postal code length exceeded.",
    code: "CG-021"
  }
};
