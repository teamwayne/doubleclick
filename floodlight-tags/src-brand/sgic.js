// ***SGIC Floodlight Tags for Manage***
// Last Generated: 2019-09-29T07:12:17
// Number of tags converted: 37

window.load = window.load || {};
window.load.tags = window.load.tags || {};
window.load.tags.dcmtagsManage = window.load.tags.dcmtagsManage || {};
window.load.tags.dcmtagsManage.sgic = {
  'SGIC Retargeting Slice Allocation': {
    'type': 'rtgexp',
    'cat': 'retar0',
    'targetPage': 'ALL',
    'journey': true
  },
  'SGIC Home Page': {
    'type': 'prod0',
    'cat': 'sgich0',
    'targetSource': 'pathname',
    'targetPage': /^\/$/i
  },
  'SGIC Product Page: Boat': {
    'type': 'prod0',
    'cat': 'sgicp003',
    'targetSource': 'pathname',
    'targetPage': /^\/boat-insurance\/?$/i
  },
  'SGIC Product Page: Car Comp': {
    'type': 'prod0',
    'cat': 'sgicp00',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/comprehensive-car-insurance\/?$/i
  },
  'SGIC Product Page: Car Comp Plus': {
    'type': 'prod0',
    'cat': 'sgicp004',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/comprehensive-plus\/?$/i
  },
  'SGIC Product Page: Car TPFT': {
    'type': 'prod0',
    'cat': 'sgicp006',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/third-party-fire-theft\/?$/i
  },
  'SGIC Product Page: Car TPPD': {
    'type': 'prod0',
    'cat': 'sgicp005',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/third-party-property-damage-car-insurance\/?$/i
  },
  'SGIC Product Page: Car VVC': {
    'type': 'prod0',
    'cat': 'sgicp007',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/veteran-vintage-classic\/?$/i
  },
  'SGIC Product Page: Caravan': {
    'type': 'prod0',
    'cat': 'sgicp002',
    'targetSource': 'pathname',
    'targetPage': /^\/caravan-insurance\/?$/i
  },
  'SGIC Product Page: Home Insurance Buildings': {
    'type': 'prod0',
    'cat': 'sgicp0',
    'targetSource': 'pathname',
    'targetPage': /^\/home-insurance\/buildings\/?$/i
  },
  'SGIC Product Page: Home Insurance Comb': {
    'type': 'prod0',
    'cat': 'sgicp009',
    'targetSource': 'pathname',
    'targetPage': /^\/home-insurance\/buildings-contents-combined\/?$/i
  },
  'SGIC Product Page: Home Insurance Content': {
    'type': 'prod0',
    'cat': 'sgicp008',
    'targetSource': 'pathname',
    'targetPage': /^\/home-insurance\/contents\/?$/i
  },
  'SGIC Product Page: Motor Cycle Comp': {
    'type': 'prod0',
    'cat': 'sgicp000',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/comprehensive\/?$/i
  },
  'SGIC Product Page: Motor Cycle TPPD': {
    'type': 'prod0',
    'cat': 'sgicp00a',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/third-party-property-damage\/?$/i
  },
  'SGIC Product Page: Motor Scooter Comp': {
    'type': 'prod0',
    'cat': 'sgicp00-',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/comprehensive-scooter\/?$/i
  },
  'SGIC product Page: Motor Scooter TPPD': {
    'type': 'prod0',
    'cat': 'sgicp00b',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/third-party-property-damage-scooter\/?$/i
  },
  'SGIC Product Page: Online Discount': {
    'type': 'prod0',
    'cat': 'disc',
    'targetSource': 'pathname',
    'targetPage': /^\/online-discount\/?$/i
  },
  'SGIC Product Page: Travel': {
    'type': 'prod0',
    'cat': 'sgicp001',
    'targetSource': 'pathname',
    'targetPage': /^\/travel-insurance\/.*-travel-insurance\/?$/i
  },
  'SGIC Category Page: Car': {
    'type': 'prod0',
    'cat': 'sgicc0',
    'targetSource': 'pathname',
    'targetPage': /^\/car-insurance\/?$/i
  },
  'SGIC Category Page: Home Insurance': {
    'type': 'prod0',
    'cat': 'sgicc00',
    'targetSource': 'pathname',
    'targetPage': /^\/home-insurance\/?$/i
  },
  'SGIC Category Page: Motor and Scooter': {
    'type': 'prod0',
    'cat': 'sgicc000',
    'targetSource': 'pathname',
    'targetPage': /^\/motorcycle-insurance\/?$/i
  },
  'SGIC Quote Start: Boat': {
    'type': 'qte-strt',
    'cat': 'boaqs',
    'targetPage': /\/quote\/boat.*\/step1\/?$/i,
    'journey': true
  },
  'SGIC Quote Start: Business Insurance': {
    'type': 'qte-strt',
    'cat': 'busins1',
    'targetPage': /quote\/business\/(((?!(business-pack)).)*\/splash|(business-pack\/eligibility))\/?$/i,
    'journey': true
  },
  'SGIC Quote Start: Caravan': {
    'type': 'qte-strt',
    'cat': 'crvqs',
    'targetPage': /\/quote\/caravan.*\/step1\/?$/i,
    'journey': true
  },
  'SGIC Quote Start: Generic': {
    'type': 'qte-strt',
    'cat': 'gen1',
    'targetPage': /\/quote\/(caravan|boat).*\/step1\/?$/i,
    'journey': true
  },
  'SGIC Quote Complete: Boat': {
    'type': 'qte-cmpl',
    'cat': 'boaqc',
    'targetPage': /\/quote\/boat.*\/quick-quote\/?$/i,
    'journey': true
  },
  'SGIC Quote Complete: Business Insurance': {
    'type': 'qte-cmpl',
    'cat': 'busins2',
    'targetPage': /quote\/business\/.*\/price$/i,
    'journey': true
  },
  'SGIC Quote Complete: Caravan': {
    'type': 'qte-cmpl',
    'cat': 'crvqc',
    'targetPage': /\/quote\/caravan.*\/quick-quote\/?$/i,
    'journey': true
  },
  'SGIC Quote Complete: Generic': {
    'type': 'qte-cmpl',
    'cat': 'gen2',
    'targetPage': /\/quote\/(caravan|boat).*\/quick-quote\/?$/i,
    'journey': true
  },
  'SGIC Buy Start: Boat': {
    'type': 'buyst0',
    'cat': 'boatbs',
    'targetPage': /\/quote\/boat.*\/start-buy\/?$/i,
    'journey': true
  },
  'SGIC Buy Start: Business Insurance': {
    'type': 'buyst0',
    'cat': 'busins5',
    'targetPage': /quote\/business\/.*\/buy-business-details$/i,
    'journey': true
  },
  'SGIC Buy Start: Caravan': {
    'type': 'buyst0',
    'cat': 'crvbs',
    'targetPage': /\/quote\/caravan.*\/start-buy\/?$/i,
    'journey': true
  },
  'SGIC Buy Start: Generic': {
    'type': 'buyst0',
    'cat': 'gen5',
    'targetPage': /\/quote\/(caravan|boat).*\/start-buy\/?$/i,
    'journey': true
  },
  'SGIC Buy Complete: Boat': {
    'type': 'buyco00',
    'cat': 'boabc',
    'countingMethod': 'transactions',
    'targetPage': /\/quote\/boat.*\/purchase-confirmation\/?$/i,
    'journey': true
  },
  'SGIC Buy Complete: Business Insurance': {
    'type': 'buyco00',
    'cat': 'busins6',
    'countingMethod': 'transactions',
    'targetPage': /quote\/business\/.*\/purchase-confirmation$/i,
    'journey': true
  },
  'SGIC Buy Complete: Caravan': {
    'type': 'buyco00',
    'cat': 'crvbc',
    'countingMethod': 'transactions',
    'targetPage': /\/quote\/caravan.*\/purchase-confirmation\/?$/i,
    'journey': true
  },
  'SGIC Buy Complete: Generic': {
    'type': 'buyco00',
    'cat': 'gen6',
    'countingMethod': 'transactions',
    'targetPage': /\/quote\/(caravan|boat).*\/purchase-confirmation\/?$/i,
    'journey': true
  }
};