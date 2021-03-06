export function httpGetAsync(url: string, callback: Function)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
          callback(JSON.parse(xmlHttp.responseText));
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}