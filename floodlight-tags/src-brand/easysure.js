// ***CGU Floodlight Tags for Supertag***
// Last Generated: 2019-10-01T23:05:45
// Number of tags converted: 48

(function() {

  if (!load.tools.checkCGUEasysure()) {
    return;
  }
  window.load = window.load || {};
  window.load.tags = window.load.tags || {};
  window.load.tags.dcmtagsTealium = window.load.tags.dcmtagsTealium || {};
  window.load.tags.dcmtagsTealium.cgu = {
    "CGU Retargeting Slice Allocation": {
      type: "rtgexp",
      cat: "retarg0",
      targetPage: "ALL",
      journey: true
    },
    "CGU Quote Start: Car Comp": {
      type: "qte-strt",
      cat: "carcom1",
      targetPage: /\/quote\/car\/comprehensive\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Car TPFT": {
      type: "qte-strt",
      cat: "cartpft1",
      targetPage: /\/quote\/car\/3rd party fire & theft\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Car TPPD": {
      type: "qte-strt",
      cat: "cartppd1",
      targetPage: /\/quote\/car\/3rd party only\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Home Building": {
      type: "qte-strt",
      cat: "hombld1",
      targetPage: /\/quote\/home\/buildings?\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Home Content": {
      type: "qte-strt",
      cat: "homcon1",
      targetPage: /\/quote\/home\/contents?\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Home Combined": {
      type: "qte-strt",
      cat: "homcom1",
      targetPage: /\/quote\/home\/building and contents?\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Home Landlord Building": {
      type: "qte-strt",
      cat: "hmllbd1",
      targetPage: /\/quote\/landlord\/buildings?\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Home Landlord Content": {
      type: "qte-strt",
      cat: "hmllcon1",
      targetPage: /\/quote\/landlord\/contents?\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Home Landlord Combined": {
      type: "qte-strt",
      cat: "hmllcom1",
      targetPage: /\/quote\/landlord\/building and contents?\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Generic": {
      type: "qte-strt",
      cat: "gen1",
      targetPage: /\/quote\/.*\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Car All": {
      type: "qte-strt",
      cat: "carall1",
      targetPage: /\/quote\/car\/.*\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Travel": {
      type: "qte-strt",
      cat: "trav1",
      targetPage: /\/quote\/travel\/.*\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Home All": {
      type: "qte-strt",
      cat: "homall1",
      targetPage: /\/quote\/home\/.*\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Start: Home Landlord All": {
      type: "qte-strt",
      cat: "hmllall1",
      targetPage: /\/quote\/landlord\/.*\/step1\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Generic": {
      type: "qte-cmpl",
      cat: "gen2",
      targetPage: /\/quote\/.*\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Car Comp": {
      type: "qte-cmpl",
      cat: "carcom2",
      targetPage: /\/quote\/car\/comprehensive\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Car TPFT": {
      type: "qte-cmpl",
      cat: "cartpft2",
      targetPage: /\/quote\/car\/3rd party fire & theft\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Car TPPD": {
      type: "qte-cmpl",
      cat: "cartppd2",
      targetPage: /\/quote\/car\/3rd party only\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Travel": {
      type: "qte-cmpl",
      cat: "trav2",
      targetPage: /\/quote\/travel\/.*\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Home Building": {
      type: "qte-cmpl",
      cat: "hombld2",
      targetPage: /\/quote\/home\/buildings?\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Home Combined": {
      type: "qte-cmpl",
      cat: "homcom2",
      targetPage: /\/quote\/home\/building and contents?\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Home Content": {
      type: "qte-cmpl",
      cat: "homcon2",
      targetPage: /\/quote\/home\/contents?\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Home Landlord Content": {
      type: "qte-cmpl",
      cat: "hmllcon2",
      targetPage: /\/quote\/landlord\/contents?\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Home Landlord Building": {
      type: "qte-cmpl",
      cat: "hmllbd2",
      targetPage: /\/quote\/landlord\/buildings?\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Quote Complete: Home Landlord Combined": {
      type: "qte-cmpl",
      cat: "hmllcom2",
      targetPage: /\/quote\/landlord\/building and contents?\/quick-quote\/?$/i,
      journey: true
    },
    "CGU Buy Start: Generic": {
      type: "buyst0",
      cat: "gen5",
      targetPage: /\/quote\/.*\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Car Comp": {
      type: "buyst0",
      cat: "carcom5",
      targetPage: /\/quote\/car\/comprehensive\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Car TPFT": {
      type: "buyst0",
      cat: "cartpft5",
      targetPage: /\/quote\/car\/3rd party fire & theft\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Car TPPD": {
      type: "buyst0",
      cat: "cartppd5",
      targetPage: /\/quote\/car\/3rd party only\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Travel": {
      type: "buyst0",
      cat: "trav5",
      targetPage: /\/quote\/travel\/.*\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Home Building": {
      type: "buyst0",
      cat: "hombld5",
      targetPage: /\/quote\/home\/buildings?\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Home Combined": {
      type: "buyst0",
      cat: "homcom5",
      targetPage: /\/quote\/home\/building and contents?\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Home Content": {
      type: "buyst0",
      cat: "homcon5",
      targetPage: /\/quote\/landlord\/contents?\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Home Landlord Combined": {
      type: "buyst0",
      cat: "hmllcom5",
      targetPage: /\/quote\/landlord\/building and contents?\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Home Landlord Building": {
      type: "buyst0",
      cat: "hmllbd5",
      targetPage: /\/quote\/landlord\/buildings?\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Start: Home Landlord Content": {
      type: "buyst0",
      cat: "hmllcon5",
      targetPage: /\/quote\/landlord\/contents?\/buy-step1\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Generic": {
      type: "buyco000",
      cat: "gen6",
      countingMethod: "transactions",
      targetPage: /\/quote\/.*\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Car Comp": {
      type: "buyco000",
      cat: "carcom6",
      countingMethod: "transactions",
      targetPage: /\/quote\/car\/comprehensive\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Car TPFT": {
      type: "buyco000",
      cat: "cartpft6",
      countingMethod: "transactions",
      targetPage: /\/quote\/car\/3rd party fire & theft\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Car TPPD": {
      type: "buyco000",
      cat: "cartppd6",
      countingMethod: "transactions",
      targetPage: /\/quote\/car\/3rd party only\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Travel": {
      type: "buyco000",
      cat: "trav6",
      countingMethod: "transactions",
      targetPage: /\/quote\/travel\/.*\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Home Building": {
      type: "buyco000",
      cat: "hombld6",
      countingMethod: "transactions",
      targetPage: /\/quote\/home\/buildings?\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Home Combined": {
      type: "buyco000",
      cat: "homcom6",
      countingMethod: "transactions",
      targetPage: /\/quote\/home\/building and contents?\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Home Content": {
      type: "buyco000",
      cat: "homcon6",
      countingMethod: "transactions",
      targetPage: /\/quote\/home\/contents?\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Home Landlord Combined": {
      type: "buyco000",
      cat: "hmllcom6",
      countingMethod: "transactions",
      targetPage: /\/quote\/landlord\/building and contents?\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Home Landlord Building": {
      type: "buyco000",
      cat: "hmllbd6",
      countingMethod: "transactions",
      targetPage: /\/quote\/landlord\/buildings?\/purchase-confirmation\/?$/i,
      journey: true
    },
    "CGU Buy Complete: Home Landlord Content": {
      type: "buyco000",
      cat: "hmllcon6",
      countingMethod: "transactions",
      targetPage: /\/quote\/landlord\/contents?\/purchase-confirmation\/?$/i,
      journey: true
    }
  };
})();
