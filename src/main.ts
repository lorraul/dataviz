import { httpGetAsync } from "./functions";

import { IGoogleSpreadsheetJson } from './interfaces';

import { Tabletop } from "../node_modules/tabletop/src/tabletop.min.js";

var onSuccess = function(response: IGoogleSpreadsheetJson){
    //document.write(JSON.stringify(response.feed));
    //console.log(JSON.stringify(response.feed));
}

httpGetAsync('https://spreadsheets.google.com/feeds/list/1H5WDRHgq6ix2bM2JFLLBN7lsFzJEMbUBGtL_MkNHaxo/1/public/values?alt=json', onSuccess);


var tabletop = Tabletop.init({ 
  key: '1H5WDRHgq6ix2bM2JFLLBN7lsFzJEMbUBGtL_MkNHaxo', 
  callback: function(data:any, tabletop:any) {
    console.log(data);
  }
})