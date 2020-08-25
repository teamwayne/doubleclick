const w = window;

/**
 * Helper to clean a dirty string by returning a specific value from an array. Used in this.getUParams()
 * @param {string} str Dirty string input
 * @param {array} testArr An array containing strings to evaluate against. If matched, this string will be returned.
 */
 const cleanStr = (str, testArr) => {
  if (!str) return;
  for (var i in testArr) {
    var re = new RegExp(testArr[i])
    if (re.test(str)) return testArr[i];
  }
  return str.toLowerCase();
};
/**
 * Original spaghetti function written by Chaoming to grab additional metadata set by the tag container.
 * These are populated to custom params for Floodlight reports called uParams.
 * It is tag container specific unfortunately.
 * @param {string} brand The brand name used in u1. 
 * TODO: Rewrite spaghetti.
*/
export const getUParams = (brand, pageId, data) => {
  var customVars = {};
  customVars.siteBrand = brand;
  customVars.pagePath = pageId;
  // TODO: Figure it out manage.js Programatic datalyer.

  if (Array.isArray(data.product)) {
    var products = data.product[0];
    // products = products.substr(1);
    // if (products && products.indexOf(';') > 0) {
    //   var productVariables = products.split(';');
    //   var productParts = '';
    //   for (var i = 0; i < productVariables.length; i++) {
    //     if (i === 0) {
    //       if (productVariables[i].indexOf(':') > 0) {
    //         productParts = productVariables[i].split(':');
    //         customVars.productCategory = productParts[0];
    //         customVars.product = productVariables[i];
    //       } else {
    //         customVars.productCategory = productVariables[i];
    //         customVars.product = productVariables[i];
    //       }
    //     }
    //     if (productVariables[i].indexOf('event29') >= 0 || productVariables[i].indexOf('event28') >= 0) {
    //       if (productVariables[i].indexOf('|') >= 0) {
    //         var events = productVariables[i].split('|');
    //         for (var j = 0; j < events.length; j++) {
    //           if (events[j].indexOf('event29') >= 0) customVars.annualPremiumAmount = events[j].substr(8);
    //           if (events[j].indexOf('event28') >= 0) customVars.paymentAmount = events[j].substr(8);
    //         }
    //       } else {
    //         if (productVariables[i].indexOf('event29') >= 0) customVars.annualPremiumAmount = productVariables[i].substr(8);
    //         if (productVariables[i].indexOf('event28') >= 0) customVars.paymentAmount = productVariables[i].substr(8);
    //       }
    //     }
    //   }
    // } else {
      if (products && products.indexOf(':') > 0) {
        productParts = products.split(':');
        customVars.productCategory = productParts[0];
        customVars.product = products;
      } else {
        customVars.productCategory = products;
        customVars.product = products;
      }
    // }
  }

  if (typeof data !== 'undefined') {
    customVars.crodsId = data.data.adobe_primary_customer_id;
    customVars.policyNumber = data.data_policyNumber;
    customVars.sessionId = data.tealium_session_id;
    customVars.transactionId = data.data_receiptNumber;
    customVars.paymentMethod = cleanStr(data.data_paymentMethod, ['visa','mastercard','creditcard','directdebit','paypal']);
    customVars.paymentFrequency = cleanStr(data.data_paymentFrequency, ['annual','monthly','halfyear']);
    customVars.remarketingSlice = data.remarketing_slice; // PER-3529

  // PER-6551 Search utag_data if not found in the b object.  
  } else if (w.utag_data) {
    customVars.crodsId = w.utag_data.adobe_primary_customer_id;
    customVars.policyNumber = w.utag_data.data_policyNumber;
    customVars.sessionId = w.utag_data.tealium_session_id;
    customVars.transactionId = w.utag_data.data_receiptNumber;
    customVars.paymentMethod = cleanStr(w.utag_data.data_paymentMethod, ['visa','mastercard','creditcard','directdebit','paypal']);
    customVars.paymentFrequency = cleanStr(w.utag_data.data_paymentFrequency, ['annual','monthly','halfyear']);
    customVars.remarketingSlice = w.utag_data.remarketing_slice; // PER-3529
  }
  return customVars;
};