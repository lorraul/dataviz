import { httpGetAsync } from "./functions";

import { IGoogleSpreadsheetJson } from './interfaces';

var onSuccess = function(response: IGoogleSpreadsheetJson){
    document.write(JSON.stringify(response.feed));
}

httpGetAsync('https://spreadsheets.google.com/feeds/list/1H5WDRHgq6ix2bM2JFLLBN7lsFzJEMbUBGtL_MkNHaxo/1/public/values?alt=json', onSuccess);