// ***SGIO Floodlight Tags for Manage***
// Last Generated: 2019-10-03T06:21:15
// Number of tags converted: 37

window.load = window.load || {};
window.load.tags = window.load.tags || {};
window.load.tags.dcmtagsManage = window.load.tags.dcmtagsManage || {};
window.load.tags.dcmtagsManage.sgio = {
  'SGIO Retargeting Slice Allocation': {
    'type': 'rtgexp',
    'cat': 'retar0',
    'targetPage': 'ALL',
    'journey': true
  },
  'SGIO Home Page': {
    'type': 'prod0',
    'cat': 'sgioh0',
    'targetSource': 'pathname',
    'targetPage': /^\/$/i
  },
  'SGIO Category Page: Car': {
    'type': 'prod0',
    'cat': 'sgioc0',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/?$/i
  },
  'SGIO Category Page: Home': {
    'type': 'prod0',
    'cat': 'sgioc00',
    'targetSource': 'pathname',
    'targetPage': /^\/home-insurance\/?$/i
  },
  'SGIO Category Page: Motor Cycle & Scooter': {
    'type': 'prod0',
    'cat': 'sgioc000',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/?$/i
  },
  'SGIO Product Page: Boat': {
    'type': 'prod0',
    'cat': 'sgiop003',
    'targetSource': 'pathname',
    'targetPage': /^\/boat-insurance\/?$/i
  },
  'SGIO Product Page: Car Comp': {
    'type': 'prod0',
    'cat': 'sgiop00',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/comprehensive-car-insurance\/?$/i
  },
  'SGIO Product Page: Car Comp Plus': {
    'type': 'prod0',
    'cat': 'sgiop004',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/comprehensive-plus\/?$/i
  },
  'SGIO Product Page: Car TPFT': {
    'type': 'prod0',
    'cat': 'sgiop006',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/third-party-fire-theft\/?$/i
  },
  'SGIO Product Page: Car TPPD': {
    'type': 'prod0',
    'cat': 'sgiop005',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/third-party-property-damage-car-insurance\/?$/i
  },
  'SGIO Product Page: Car VVC': {
    'type': 'prod0',
    'cat': 'sgiop007',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/veteran-vintage-classic\/?$/i
  },
  'SGIO Product Page: Caravan': {
    'type': 'prod0',
    'cat': 'sgiop002',
    'targetSource': 'pathname',
    'targetPage': /^\/caravan-insurance\/?$/i
  },
  'SGIO Product Page: Home Insurance Buildings': {
    'type': 'prod0',
    'cat': 'sgiop0',
    'targetSource': 'pathname',
    'targetPage': /^\/home-insurance\/buildings\/?$/i
  },
  'SGIO Product Page: Home Insurance Comb': {
    'type': 'prod0',
    'cat': 'sgiop009',
    'targetSource': 'pathname',
    'targetPage': /^\/home-insurance\/buildings-contents-combined\/?$/i
  },
  'SGIO Product Page: Home Insurance Contents': {
    'type': 'prod0',
    'cat': 'sgiop008',
    'targetSource': 'pathname',
    'targetPage': /^\/home-insurance\/contents\/?$/i
  },
  'SGIO Product Page: Motor Cycle Comp': {
    'type': 'prod0',
    'cat': 'sgiop000',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/comprehensive\/?$/i
  },
  'SGIO Product Page: Motor Cycle TPPD': {
    'type': 'prod0',
    'cat': 'sgiop00a',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/third-party-property-damage\/?$/i
  },
  'SGIO Product Page: Motor Scooter Comp': {
    'type': 'prod0',
    'cat': 'sgiop00-',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/comprehensive-scooter\/?$/i
  },
  'SGIO Product Page: Motor Scooter TPPD': {
    'type': 'prod0',
    'cat': 'sgiop00b',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/third-party-property-damage-scooter\/?$/i
  },
  'SGIO Product Page: Online Discount': {
    'type': 'prod0',
    'cat': 'disc',
    'targetSource': 'pathname',
    'targetPage': /^\/online-discount\/?$/i
  },
  'SGIO Product Page: Travel': {
    'type': 'prod0',
    'cat': 'sgiop001',
    'targetSource': 'pathname',
    'targetPage': /^\/travel-insurance\/.*-travel-insurance\/?$/i
  },
  'SGIO Quote Start: Generic': {
    'type': 'qte-strt',
    'cat': 'gen1',
    'targetPage': /\/quote\/(caravan|boat).*\/step1\/?$/i,
    'journey': true
  },
  'SGIO Quote Start: Business Insurance': {
    'type': 'qte-strt',
    'cat': 'busins1',
    'targetPage': /quote\/business\/(((?!(business-pack)).)*\/splash|(business-pack\/eligibility))\/?$/i,
    'journey': true
  },
  'SGIO Quote Start: Boat': {
    'type': 'qte-strt',
    'cat': 'boaqs',
    'targetPage': /\/quote\/boat.*\/step1\/?$/i,
    'journey': true
  },
  'SGIO Quote Complete: Generic': {
    'type': 'qte-cmpl',
    'cat': 'gen2',
    'targetPage': /\/quote\/(caravan|boat).*\/quick-quote\/?$/i,
    'journey': true
  },
  'SGIO Quote Complete: Business Insurance': {
    'type': 'qte-cmpl',
    'cat': 'busins2',
    'targetPage': /quote\/business\/.*\/price$/i,
    'journey': true
  },
  'SGIO Quote Complete: Boat': {
    'type': 'qte-cmpl',
    'cat': 'boaqc',
    'targetPage': /\/quote\/boat.*\/quick-quote\/?$/i,
    'journey': true
  },
  'SGIC Quote Start: Caravan': {
    'type': 'qte-strt',
    'cat': 'crvqs',
    'targetPage': /\/quote\/caravan.*\/step1\/?$/i,
    'journey': true
  },
  'SGIO Quote Complete: Caravan': {
    'type': 'qte-cmpl',
    'cat': 'crvqc',
    'targetPage': /\/quote\/caravan.*\/quick-quote\/?$/i,
    'journey': true
  },
  'SGIO Buy Start: Business Insurance': {
    'type': 'buyst0',
    'cat': 'busins5',
    'targetPage': /quote\/business\/.*\/buy-business-details$/i,
    'journey': true
  },
  'SGIO Buy Start: Generic': {
    'type': 'buyst0',
    'cat': 'gen5',
    'targetPage': /\/quote\/(caravan|boat).*\/start-buy\/?$/i,
    'journey': true
  },
  'SGIO Buy Start: Boat': {
    'type': 'buyst0',
    'cat': 'boabs',
    'targetPage': /\/quote\/boat.*\/start-buy\/?$/i,
    'journey': true
  },
  'SGIO Buy Start: Caravan': {
    'type': 'buyst0',
    'cat': 'boabs',
    'targetPage': /\/quote\/caravan.*\/start-buy\/?$/i,
    'journey': true
  },
  'SGIO Buy Complete: Business Insurance': {
    'type': 'buyco00',
    'cat': 'busins6',
    'countingMethod': 'transactions',
    'targetPage': /quote\/business\/.*\/purchase-confirmation$/i,
    'journey': true
  },
  'SGIO Buy Complete: Generic': {
    'type': 'buyco00',
    'cat': 'gen6',
    'countingMethod': 'transactions',
    'targetPage': /\/quote\/(caravan|boat).*\/purchase-confirmation\/?$/i,
    'journey': true
  },
  'SGIO Buy Complete: Boat': {
    'type': 'buyco00',
    'cat': 'boabc',
    'countingMethod': 'transactions',
    'targetPage': /\/quote\/boat.*\/purchase-confirmation\/?$/i,
    'journey': true
  },
  'SGIO Buy Complete: Caravan': {
    'type': 'buyco00',
    'cat': 'crvbc',
    'countingMethod': 'transactions',
    'targetPage': /\/quote\/caravan.*\/purchase-confirmation\/?$/i,
    'journey': true
  }
};