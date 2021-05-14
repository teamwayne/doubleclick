// Safely load load object.
import FL_UTILS from '../utils/utils';
import {getUParams} from './uParams';

window.load = window.load || {};
window.load.tags = window.load.tags || {};
// Inherit common Tealium helper tools from IAG Common Tealium Helpers Extension
window.utag_data = window.utag_data || {};
// Use load.tools, but if doesn't exist, use utag_data.tools
var tools = window.load.tools || window.utag_data.tools || {};

let dataObj = {};
  
const setDataObj = data => {
  dataObj = {
    ...data
  };
};
const getDataObj = () => dataObj;

const DCMTAGS = {  
  // Stores the pageId after FL_UTILS.getPageId() is run.
  pageId: '',
  // Stores each tag which has been fired to avoid double-firing of tags.
  fired: {},
  // Boolean if logged to console.
  logged: false,
  // Floodlight tag library version
  appVersion: 'fl-2.0',
  // Set the default counting method to 'unique' if tagsObj.countingMethod doesn't exist.
  defaultCountingMethod: 'unique',
  // Mapper object to tie brand name to Floodlight Advertiser Id
  brandMapperObj: {
    'sgio': {
      'name': 'sgio',
      'advertiserId': '5969419',
    },
    'sgic': {
      'name': 'sgic',
      'advertiserId': '5978608',
    },
    'nrma': {
      'name': 'nrma',
      'advertiserId': '5944274',
    },
    'cgu': {
      'name': 'cgu',
      'advertiserId': '6123935',
    },
    'bendigobank': {
      'name': 'bendigobank',
      'advertiserId': '6773703',
    },
  },
  /* Run the main function of this library. See this.execute() for further information.
   * Note the parameters of this.handleDCMTags() is the dcmtags object set globally in window.load.tags.
   * This is dependent on tag container.
   */
  executeLibrary: function(brandObj) {
    return this.handleDCMTags(window.load.tags['dcmtags' + FL_UTILS.container], brandObj);
  },
  /**
   * Timeout function to avoid things double firing for whatever reason.
  */
  timeOut: function(flag, milliSec) {
    this[flag] = true;
    var that = this;
    setTimeout(function() {
      that[flag] = false;
    }, milliSec);
  },
  /**
   * Enable Logging: Log to console if load.tools.enterDebugMode() on.
  */
  logger: function(firedTagObj) {
    if (window.localStorage && window.localStorage.getItem('siteTrackingDebug')) {
      if (!this.logged) {
        console.log('%c Floodlight(s) Fired on ' + this.pageId + ' ', 'background: #0f9d58; color: #DDDDDD; font-weight: bold'); // eslint-disable-line no-console
        this.timeOut('logged', 500);
      }
      console.table(firedTagObj); // eslint-disable-line no-console
    }

  },
  /**
   * Function to iterate through the brand array and to search the brand object . This is required as some apps don't show brand in the URL.
   * @param {array} brandArr Array returned from FL_UTILS.getBrandArr()
   * @param {object} brandMapperObj From this.brandMapperObj
   */
  getBrandObj: function(brandArr, brandMapperObj) {
    for (var i = 0; i < brandArr.length; i++) {
      var brandObj = this.searchBrandObj(brandArr[i], brandMapperObj);
      if (brandObj) return brandObj;
    }
    return false;
  },
  /**
   * Function to search the brand object for the brand string. Run in getBrandObj() above.
   * @param {string} brandStr The brand string from the FL_UTILS.getBrandArr() array.
   * @param {object} brandMapperObj From this.brandMapperObj
   */
  searchBrandObj: function(brandStr, brandMapperObj) {
    if (!brandStr) return false;
    for (var brand in brandMapperObj) {
      var re = new RegExp(brand, 'i');
      if (re.test(brandStr)) return brandMapperObj[brand];
    }
    return false;
  },
  /**
   * Helper to merge (or extend) two objects together forming one big and flat object
   * @param {object} obj New object you wish to merge
   * @param {object} src Existing object
   */
  extendObj: function(obj, src) {
    if (!obj) return;
    Object.keys(src).forEach(function(key) {
      obj[key] = src[key];
    });
    return obj;
  },
  /**
   * Floodlight tag Random Number Generator. used by pixel tag and as backup for Transaction Id.
   */
  randomNum: function() {
    return (Math.random() + '') * 10000000000000;
  },
  /**
   * Clean ord value as per Google's requirements.
   */
  cleanOrd: function(str) {
    if (!str) return;
    return str.toString()
      .replace(/((?![a-zA-Z0-9.]+).)/g,'')
      .substr(0,15);
  },
  /**
   * Reformats the customVars object into a format used by the gtag fired Floodlight tag.
   * @param {object} customVars the object returned by this.getUParams()
   */
  assembleUParams: function(customVars) {
    return {
      'u1': customVars.siteBrand || '',
      'u2': customVars.pagePath || window.location.hostname  + window.location.pathname || '', // PER-5653 Enable U2 again
      'u3': customVars.crodsId || '',
      'u6': customVars.productCategory || '',
      'u7': customVars.product || '',
      'u8': customVars.annualPremiumAmount || '',
      'u9': customVars.policyNumber || '',
      'u11': customVars.sessionId || '',
      'u12': this.cleanOrd(customVars.transactionId || customVars.sessionId ? 'S' + customVars.sessionId : 1),
      'u13': customVars.paymentAmount || 0.00,
      'u14': customVars.paymentMethod || '',
      'u15': customVars.paymentFrequency || '',
      'u17': this.appVersion + '-' + FL_UTILS.container, // Also set in handleTagFire()
      'u20': customVars.remarketingSlice || '',
    }
  },
  /**
   * getUParams function is located in the window.load.tags global object. This function safety retrieves it.
   * @param {object} brandObj Object returned by this.getBrand()
   */
  retrieveUParams: function (brandObj) {
    if (getUParams) {
      return this.assembleUParams(getUParams(brandObj.name, this.pageId, getDataObj()));
    }
    // Still return what we can if uParamsFunc function doesn't exist.
    return this.assembleUParams({'customVars': undefined});
  },
  /**
   * Reformats the uParam object as a string so it can be used by the pixel version of the Floodlight tag.
   * @param {object} uParams the object returned by this.assembleUParams()
   */    
  pixelUParams: function (uParams) {
    return uParams ? JSON.stringify(uParams)
      .replace(/[{}"]/g,'')
      .replace(/(u\d{1,3}):/g,'$1=')
      .replace(/(^|,)/g,';')
      : '';
  },
  /**
   * Returns the correct counting method string as required by the pixel version of the Floodlight tag.
   * @param {string} method The counting method
   * @param {object} uParams Object returned by this.assembleUParams()
   */
  pixelCountingMethod: function (method, uParams) {
    switch (method) {
    case 'standard': // ;ord=' + random number
      return this.randomNum();
    case 'transactions': // ;ord=[OrderID];qty=1;cost=[Revenue]
      return uParams.u12 + // customVars.transactionId
        ';qty=1;cost=' +
        uParams.u13; // customVars.paymentAmount
    default: // unique: ;ord=1;num=' + random number
      return '1;num=' + this.randomNum();
    }
  }, 
  /**
   * Fires gTag version of the Floodlight tag. This should be the primary way Floodlight tags fire.
   * @param {object} tagObj The single tag object from the for in loop from window.load.tags.dcmtags
   * @param {object} brandObj Object returned by this.getBrand()
   * @param {object} uParams Object returned by this.assembleUParams()
  */
  fireGtag: function(tagObj, brandObj, uParams) {
    var gTagConfig = {};
    var conversionType = tagObj.countingMethod === 'transactions' ? 'purchase' : 'conversion';

    // Set values if gtag Floodlight sales tag
    if (tagObj.countingMethod === 'transactions') {
      gTagConfig.value = uParams.u13; // customVars.paymentAmount
      gTagConfig.transaction_id = uParams.u12; // customVars.transactionId
    }
    gTagConfig.allow_custom_scripts = true;
    gTagConfig.send_to =
      'DC-' + brandObj.advertiserId +
      '/' + tagObj.type +
      '/' + tagObj.cat +
      '+' + (tagObj.countingMethod ? tagObj.countingMethod : this.defaultCountingMethod);
    this.extendObj(gTagConfig, uParams);
    window.gtag('event', conversionType, gTagConfig);
  },  
  /**
   * Fires pixel version of the Floodlight tag. This should only be fired as backup if gTag isn't available for whatever reason.
   * @param {object} tagObj The single tag object from the for in loop from window.load.tags.dcmtags
   * @param {object} brandObj Object returned by this.getBrand()
   * @param {object} uParams Object returned by this.assembleUParams()
  */
  firePixel: function(tagObj, brandObj, uParams) {
    var pixel = new Image(1, 1);
    pixel.style = 'display:none';
    pixel.src =
      '//ad.doubleclick.net/ddm/activity/src=' + brandObj.advertiserId +
      ';type=' + tagObj.type +
      ';cat=' + tagObj.cat +
      this.pixelUParams(uParams) +
      ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + 
      this.pixelCountingMethod(tagObj.countingMethod, uParams) +
      '?';
    document.body.appendChild(pixel);
  },
  /**
   * Function to log things to Splunk for debugging purposes.
   * @param {string} queryStr a URL encoded string separated by name value pairs which logs information to Splunk.
   */
  fireSplunk: function(queryStr) {
    if(!queryStr) return;
    var reqId = new Date().getTime() + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    var srcStr = 'https://apps.nrma.com.au/si/track.gif' +
    '?reqId=' +
    reqId +
    queryStr;
    var img = new Image();
    img.src = srcStr;
  },
  /**
   * Handler to decide how to fire the Floodlight tag, preferencing the gTag method with pixel as backup.
   * Also logs the firing of the tag to Splunk and pushes to fired tag to the this.fired array.
   * @param {string} tag The key name from the single tag object. This is the Floodlight tag name.
   * @param {object} tagObj The single tag object from the for in loop from window.load.tags.dcmtags
   * @param {object} brandObj Object returned by this.getBrand()
   */
  handleTagFire: function(tag, tagObj, brandObj) {
    var uParams = this.retrieveUParams(brandObj);
    // If exists, fire gtag
    if (typeof window.gtag === 'function') {
      uParams.u17 = uParams.u17 + '-GTag'
      this.fireGtag(tagObj, brandObj, uParams);
    // If gtag doesn't exist, fire the elderly pixel.
    } else {
      uParams.u17 = uParams.u17 + '-Pixel'
      this.firePixel(tagObj, brandObj, uParams);
    }
    // Add tag fired obj
    var firedTag = {}
    firedTag[tag] = tagObj;
    this.logger(firedTag);
    this.fired = this.extendObj(firedTag, this.fired);

    // Log to Splunk
    if (!/retargeting\sslice\sallocation/i.test(tag)) {
      this.fireSplunk('&Floodlight=' + encodeURIComponent(tag)
        + '&domain=' + encodeURIComponent(window.location.hostname  + window.location.pathname)
        + '&brand=' + encodeURIComponent(brandObj.name)
        + '&type=' + encodeURIComponent(tagObj.type)
        + '&cat=' + encodeURIComponent(tagObj.cat)
        + '&targetPage=' + encodeURIComponent(tagObj.targetPage)
        + '&pageId=' + encodeURIComponent(this.pageId)
        + '&appVersion=' + uParams.u17
      );
    }

  },
  /**
   * Serenity Products checking - all products are having same pageId in serenity
   * This function is checking the adobe_products whether it matching the target rules.
   * @param {String} targetProduct - Target Product base on the product match rules
   */
  handleCheckProduct: function(targetProduct, data) {
    return (data.data_product.some(function(product) { 
      return targetProduct.test(product); 
    }));
  },
  /**
   * Key handler to deciding what Floodlight tag to fire.
   * Iterates through each floodlight tag object and decides if it should be fired or not.
   * Uses a guard clause pattern as opposed to nested if statements to aid clarity.
   * @param {object} allTagsObj The global tag object set in load: window.load.tags.dcmtags
   */
  handleDCMTags: function(allTagsObj, brandObj) {
    var tagsObj = allTagsObj[brandObj.name];
    var data = getDataObj();

    // Exception handling
    if (!tagsObj) throw 'No Floodlight tags found for this Brand';

    // Note that continue; skips (not exits) the loop iteration
    for (var tag in tagsObj) {

      // Skip if tag already fired on this page
      if (this.fired[tag]) continue;

      // Fire tags with targetPage === ALL. This is typically the Remarketing Slice tags.
      if (tagsObj[tag].targetPage === 'ALL') {
        this.handleTagFire(tag, tagsObj[tag], brandObj);
        continue;
      }

      // Hack to prevent non-journey tags from firing in journeys
      if (/(insuranceonline.nrma|(businessinsurance|quote).cgu).com.au/.test(document.location.hostname) && !tagsObj[tag].journey)
      {
        continue;
      }

      // Use loadRules handler to determine if tag should fire. Also handles multiPage scenarios.
      if (tools.loadRules.handler(tagsObj[tag], this.pageId)) {
        if (tagsObj[tag].targetProduct && data.data_product) {
          // Target Product is not matched. skip to next iteration loop.
          if (!this.handleCheckProduct(tagsObj[tag].targetProduct, data)) continue;
        }
        this.handleTagFire(tag, tagsObj[tag], brandObj);
        continue;
      }
    }
  },
  /**
   * Execute function is fired in different places dependent on tag container.
   */
  execute: function (data) {
    try {
      setDataObj(data);
      this.pageId = data.pageId;
      var brandObj = this.getBrandObj(FL_UTILS.getBrandArr(), this.brandMapperObj);

      // Exception handling
      if (!brandObj) throw 'Brand could not be determined';
      if (!tools.loadRules) throw 'load.tools.loadRules not found';
      // Run library.
      this.executeLibrary(brandObj); 
    } catch (error) {
      // Log errors to console if load.tools.enterDebugMode() enabled.
      if (tools.log) tools.log('Floodlight Tag Error: ' + error)
      // Log errors to Splunk
      this.fireSplunk('&FloodlightError=' + encodeURIComponent(error)
        + '&domain=' + encodeURIComponent(window.location.hostname)
        + '&brand=' +  encodeURIComponent(brandObj.name)
        + '&pageId=' + encodeURIComponent(this.pageId)
        + '&appVersion=' + this.appVersion + '-' + FL_UTILS.container
      );
    }
  },
};

export default DCMTAGS;
