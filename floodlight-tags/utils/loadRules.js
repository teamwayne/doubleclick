const  loadRules = () => {
  window.load = window.load || {};
  window.load.tools = window.load.tools || {};
  // Exit early if window.load.tools.loadRules exists.
  if (typeof window.load.tools.loadRules === 'function') {
    return;
  }
  window.load.tools.loadRules = {
    // Use these default settings if they don't exist in tagObj
    settings: {
      mTKey: 'mTarget',
      mtKeyDelete: true,
    },
    /**
     * Checks if window.load.tools.log before logging.
     * @param {string} str The string to log
     */
    log: function(str) {
      if (window.load.tools.log) return window.load.tools.log(str);
      return;
    },
    /**
     * Create a "variable operator" to trigger a regex test function. Needed because Javascript doesn't have variable operators.
     * @param {regex} re Regex match string used in the targetSource test.
     * @param {string} targetSource Target string used in the test.
     */
    loadRuleMatcher: {
      not: function(re, targetSource) {
        return !re.test(targetSource);
      },
      default: function(re, targetSource) {
        return re.test(targetSource);
      }
    },
    /**
     * Handle "pageId" and "document.location" targetSource single loadRule.
     * @param {object} loadRuleObj The single load rule object
     * @param {string} pageId (optional) The pageId used in Adobe derived from either Manage, Tealium or Supertag
     */
    loadRuleObjHandler: function(loadRuleObj, pageId) {

      // Handle if targetPage is not a Regex.
      if (typeof loadRuleObj.targetPage === 'string') {
        return this.log('JSON load rule "targetPage" is not a regex. targetPage is: ' + loadRuleObj.targetPage);
      }

      // Handles pageId if loadRuleObj.targetSource does not exist or equals pageId)
      if (!loadRuleObj.targetSource || loadRuleObj.targetSource === 'pageId') {
        return this.loadRuleMatcher[loadRuleObj.matchType || 'default'](
          loadRuleObj.targetPage,
          pageId
        );
      }

      // Handle if targetSource value unexpected
      if (!/hash|host|hostname|href|origin|pathname|port|protocol|search/i.test(loadRuleObj.targetSource)) {
        return this.log('JSON load rule "targetSource" unexpected text: ' + loadRuleObj.targetSource);
      }

      return this.loadRuleMatcher[loadRuleObj.matchType || 'default'](
        loadRuleObj.targetPage,
        document.location[loadRuleObj.targetSource]
      );
    },
    /**
     * Get fired load rules in 'mTarget' session storage / cookie, but only if it looks like an array.
     * @param {string} mTKey key value from this.settings.mTKey
     */
    getFiredLoadRules: function(mTKey) {
      try {
        var firedLoadRules = undefined;
        if (window.sessionStorage) {
          firedLoadRules = window.sessionStorage.getItem(mTKey);
        } else if (window.load.tools.readCookie) {
          firedLoadRules = window.load.tools.readCookie(mTKey);
        }
        return firedLoadRules && /^\["/i.test(firedLoadRules) ? JSON.parse(firedLoadRules) : undefined;
      } catch (e) {
        return undefined;
      }
    },
    /**
     * Add fired load rules for multi target cases to session storage / cookie stringified array.
     * @param {string} mTKey key value from this.settings.mTKey
     * @param {object} newLoadRule New tag name to go into the firedLoadRules array
     */
    addFiredLoadRule: function(mTKey, newLoadRule) {
      var firedLoadRules = this.getFiredLoadRules(mTKey) || [];
      firedLoadRules.push(newLoadRule);
      var newFiredLoadRules = JSON.stringify(firedLoadRules);
      if (window.sessionStorage) {
        window.sessionStorage.setItem(mTKey, newFiredLoadRules);
      } else if (window.load.tools.createCookie) {
        window.load.tools.createCookie(mTKey, newFiredLoadRules);
      }
    },
    /**
     * Delete fired load rules when user is no longer on a journey.
     * @param {string} mTKey key value from this.settings.mTKey
     */
    deleteFiredLoadRules: function(mTKey) {
      if (window.sessionStorage) {
        window.sessionStorage.removeItem(mTKey);
      } else if (window.load.tools.eraseCookie) {
        window.load.tools.eraseCookie(mTKey);
      }
    },
    /**
     * Handle multi target cases by checking if the tag has fired previously by using session storage / cookie.
     * @param {object} loadRuleObj The single load rule object
     * @param {object} pageId (optional) The pageId used in Adobe derived from either Manage, Tealium or Supertag
     */
    multiTargetHandler: function(loadRuleObj, pageId) {
      var firedLoadRules = this.getFiredLoadRules(this.settings.mTKey) || 'blank';
      if (firedLoadRules.indexOf(loadRuleObj.name) === -1 &&
        this.loadRuleObjHandler(loadRuleObj, pageId)
      ) {
        this.addFiredLoadRule(this.settings.mTKey, loadRuleObj.name);
        return true;
      }
      return false;
    },
    /**
     * Handle single target cases.
     * @param {object} loadRuleObj The single load rule object
     * @param {object} pageId (optional) The pageId used in Adobe derived from either Manage, Tealium or Supertag
     */
    singleTargetHandler: function (loadRuleObj, pageId) {
      if (this.loadRuleObjHandler(loadRuleObj, pageId)) {
        // Delete fired load rules if the array exists and the user is no longer at a multi target decision.
        if (this.settings.mtKeyDelete) {
          if (this.getFiredLoadRules(this.settings.mTKey)) {
            this.deleteFiredLoadRules(this.settings.mTKey);
          }
          this.settings.mtKeyDelete = false;
        }
        return true;
      }
      return false;
    },
    /**
     * Handle multi target and standard cases.
     * @param {object} loadRuleObj The single load rule object
     * @param {object} pageId (optional) The pageId used in Adobe derived from either Manage, Tealium or Supertag
     */
    targetHandler: function(loadRuleObj, pageId) {
      // Handle multiTarget cases
      if (loadRuleObj.multiTarget && loadRuleObj.name) {
        return this.multiTargetHandler(loadRuleObj, pageId);
      }
      // Handle standard cases
      return this.singleTargetHandler(loadRuleObj, pageId);
    },
    /**
     * Handle "pageId" and "document.location" targetSource from single or multiple loadRule object.
     * @param {object} loadRuleObj The single or multiple loadRule object.
     * @param {string} pageId (optional) The pageId used in Adobe derived from either Manage, Tealium or Supertag
     */
    loadRuleHandler: function(loadRuleObj, pageId) {

      // Invoke targetHandler() if only passing a single loadRule (e.g use Floodlight Tag library or dataLayer mapping).
      if (loadRuleObj.hasOwnProperty('targetPage')) {
        return this.targetHandler(loadRuleObj, pageId);
      }

      // Loop through loadRuleObj and invoke targetHandler() for on every loadRule (e.g. Hotjar Library).
      for (var loadRule in loadRuleObj) {
        if (this.targetHandler(loadRuleObj[loadRule], pageId)) {
          return true;
        }
      }
      return false;
    },
    /**
     * Handle load rules.
     * See Floodlight Tag Master 2.0 (https://docs.google.com/spreadsheets/d/1xokEibxSp7y34pmTlFFyXa4X8_X8pVq-b299VcpB1XM/edit#gid=148394345)
     * e.g. var loadRuleObj = {
     *  'targetPage': (compulsory) @param {regex} e.g. \/quote\/.*\/(start-buy|buy-step2)\/?$ (there always must be a regex),
     *  'targetSource': (optional) @param {string} e.g. 'hash|host|hostname|href|origin|pathname|port|protocol|search' (if no targetSource, then pageId is assumed),
     *  'matchType': (optional) @param {string} e.g. 'not' (used when negatively matching previous page),
     *  'multiTarget': (optional) @param {boolean} e.g. true (used in multi target cases where a journey / flow milestone exists on multiple pages. This is mainly buy start on Kana),
     *  'name': (optional) @param {string} e.g. 'ST Test: 'NRMA Buy Start: Generic' (Must be provided in multi target cases. Is used as a value in session storage / cookie once tag is fired),
     *  'journey': (optional) @param {boolean} e.g. true (Denotes if tag runs on a journey. If it doesn't then the fired load rules array in session storage / cookie is deleted),
     * };
     * @param {object} loadRuleObj The single or multiple loadRule object.
     * @param {string} pageId (optional) The pageId used in Adobe derived from either Manage, Tealium or Supertag
     */
    handler: function(loadRuleObj, pageId) {
      // Handle if targetPage doesn't exist
      if (!loadRuleObj) return this.log('LoadRule object doesn\'t exist');
      // Handle if targetPage is not a Regex.
      if (typeof loadRuleObj !== 'object') return this.log('LoadRule is not an object');
      // Execute loadRuleHandler()
      return this.loadRuleHandler(loadRuleObj, pageId);
    }
  };
};
export default loadRules;

