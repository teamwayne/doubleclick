# IAG Manage Floodlight Tags

The `manage-floodlight` tag is simply a custom Javascript in manage built for the purpose of simplifying the rollout of Google DoubleClick Floodlight tags.

## Defining tags in the brand specific `tags` object

Each brand (nrma, cgu, scic, sgio...) have its own tag structure, this tag structure is defined in a JSON object (see example below) which is stored in an Extension in Manage, named **[BRAND] Double Click Programmatic: Tags Config Object**. Floodlight tags are targeted based on the `pageId` of the global `dataLayer` object, (which is mapped to b.pageId). This is needed as some of the Drupal journeys don't change pathnames as new pages are displayed E.g. the CGU Boat Quote Start and Complete.

The tag configuration should look like this:

```
// Make sure the `load` object exists and if not: create it
window.load = window.load || {};
window.load.tags = window.load.tags || {};
window.load.tags.dcmtags = {
  'SGIO Category Page: Car': {
    tagType: 'dc-iframe',
    targetPage: /www.sgio.com.au\/car-insurance\/?$/,
    brand: 'sgio',
    advertiserId: '5978608',
    type: 'prod0',
    cat: 'sgioc0',
    costEnabled: false,
    orderIdEnabled: false,
    qtyEnabled: false
  }
```

Please note that the `targetPage` variable can be set to `ALL` if the tag needs to fire on every single page.
Also, `'onClick': true` enables custom event handling. Currently this is only to track some modals on CGU for the Moretime pages but could be refactored to handle more generic click or mutation events.

## Floodlight Tag Master Spreadsheet
A Google sheet has been made as both a record of the Floodlight tags implemented, and to help create new Floodlight tag objects (called the `tags` Json), used in the directory `./manage-floodlight/src-brand`. This is located here: https://docs.google.com/spreadsheets/d/1FL9GH_JsyFTo4J8ZT5D5li1xsIXq5TvUYu0TTzlnxic/edit?usp=sharing

To use it, simply add a new row to any of the \*.js sheets, (e.g. CGU (cgu.js)) filling in each column as appropriate. When you want to generate the new `tags` Json, select the 'Wayne's Toolbox' menu, then 'Generate Floodlight Json'. A new sheet called 'Tags Json' will be created.

### Automated Regex Testing in Spreadsheet
Please ensure the targetPage column contains valid regex. You can check this in https://regex101.com/. The 'Generate Floodlight Json' script will also check each targetPage for valid regex as it's assembling the Json, and warn you in a popup. You'll need to fix all regex before it will show a result.

## DoubleClick Floodlight

### Install

Check out the repository and `npm install`.


### Environments

The library will produce three different versions of the same code, this is to align with the Manage environments and also allow for e.g. prod, qa or dev specific settings. The environments are:

- src
- dev
- qa
- prod


### Build

By executing `bash build` the following outputs will be created:

```
dist/
  |
  +-- ./dist/src/build.js ("raw" non minified, non prettified build - used for automation within this framework)
  |
  +-- ./dist/dev/build.js (prettified non minified build to be used for development use)
  |
  +-- ./dist/qa/build.js (minified build for QA use)
  |
  +-- ./dist/prod/build.js (minified build for production use)
```


### Debug mode

To enable debug mode and to use console messaging, set the 'debug' localStorage flag to initiate console messaging as follows:

```
  window.localStorage.setItem('debug', 1)
```
