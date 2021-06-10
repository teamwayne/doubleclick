const getDcAccount = (domain, pageId) => {
  switch(true) {
    case /sgio/i.test(domain) || /sgio/i.test(pageId):
      return '5969419';
    case /sgic/i.test(domain) || /sgic/i.test(pageId):
      return '5978608';
    case /nrma/i.test(domain):
      return '5944274';
    case /quote.cgu.com.au/i.test(domain):
      return '6123935';
    case /cgu/i.test(domain):
      return '6123935';
    case /bendigobank/i.test(domain):
      return '6773703';
    case /motorserve/i.test(domain):
    case /workshopsoftware/i.test(domain):
      return '10273753';
    default:
      return '1234567';
  }
};


const fireGTag = (pageId) => {
  const dcAccount = 'DC-' + getDcAccount(window.location.hostname, (pageId || window.__pageId || window.location.pathname));
  // Exit if superTag on page.
  if (window.superT) return;
  // Check if gtag  already loaded.
  if (!window.gtag) {
    // Assemble script tag
    var dcTag = document.createElement('script');
    dcTag.async = true;
    dcTag.src = '//www.googletagmanager.com/gtag/js?id=' + dcAccount + '&l=dcDataLayer'; // Use dcDataLayer so it doesn't clash with IAG's dataLayer

    // Insert dcTag into head of HTML document. PolyFill for IE8 and below.
    document.head ? document.head.appendChild(dcTag) : document.getElementsByTagName('head')[0].appendChild(dcTag);

    // Start: From the Global Site Tag in DCM
    window.dcDataLayer = window.dcDataLayer || [];
    window.gtag = function() {
      dcDataLayer.push(arguments);
    };
    window.gtag('js', new Date());
  }
  window.gtag('config', dcAccount);
  // End: From the Global Site Tag in DCM
};

const getGoogleAdsAccount = (domain, pageId) => {
  switch (true) {
    case /nrma/i.test(domain) && /nrma/i.test(pageId):
      return '1068824624';
    default:
      return '1234567';
  }
};

// var googleAdsAccount = 'AW-' + getGoogleAdsAccount(window.location.hostname, (b.pageId || window.__pageId || window.location.pathname));

var fireGoogleAdsTag = function (pageId) {
  const googleAdsAccount = 'AW-' + getGoogleAdsAccount(window.location.hostname, (pageId || window.__pageId || window.location.pathname));
  if (window.superT || googleAdsAccount === 'AW-1234567') return;
  // Check Whether the Google Ads tag been loaded.\
  if (!window.gtag) {
    var gAdsTag = document.createElement('script');
    gAdsTag.async = true;
    gAdsTag.src = '//www.googletagmanager.com/gtag/js?id='+ googleAdsAccount + '&l=dcDataLayer';
    gAdsTag.id = 'googleAdsScript';
    // Insert gAdsTag into head of HTML document. PolyFill for IE8 and below.
    document.head ? document.head.appendChild(gAdsTag) : document.getElementsByTagName('head')[0].appendChild(gAdsTag);
    // Start: From the Global Site Tag in DCM
    window.dcDataLayer = window.dcDataLayer || [];
    window.gtag = function() {
      dcDataLayer.push(arguments);
    };
    window.gtag('js', new Date());
  }
  window.gtag('config', googleAdsAccount);

  if (/nrma/i.test(window.location.hostname) && /nrma/i.test((pageId || window.__pageId || window.location.pathname))) {
    window.gtag('config', 'AW-353813620');
  }
};

const gTagTrigger = (pageId) => {
  try {
    fireGTag(pageId);
    fireGoogleAdsTag(pageId);
  } catch (e) {
    // Send any errors to Splunk
    var timeStamp = new Date().getTime();
    var reqId = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    reqId = timeStamp + reqId;
    var queryString = '?reqId=' + reqId
      + '&gTagError=' + encodeURIComponent(e)
      + '&domain=' + encodeURIComponent(window.location.hostname)
      + '&pageId=' + encodeURIComponent(pageId || window.__pageId || window.location.pathname);
    var src = 'https://apps.nrma.com.au/si/track.gif';
    if (location.host.indexOf('.com.au') < 0) {
      src = 'https://ints.apps.nrma.auiag.corp/si/track.gif';
    }
    src = src + queryString;
    var img = new Image();
    img.src = src;
  }
};

export default gTagTrigger;