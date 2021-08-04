
/*
    This function parses parameters from a url to redirect appropriate information to another page.
*/
const parseUrl = () => {

    // setting variable equal to document URL
    let url = document.URL;

    // urlParts becomes an array, holding string section BEFORE '?' and string section AFTER '?'
    let urlParts = url.split("?");

    console.log(urlParts);

    // Variable set equal to 2nd position in array (parameters in the url)
    let parmsString = urlParts[1];

    // kvpairs becomes an array, holding string section BEFORE '&' and string section AFTER '&'
    let kvpairs = parmsString.split("&"); // Array holding all the key-value pairs from the URL

    console.log(kvpairs);

    let urlParm = {};

    // foreach loop using 'of' to output Keys and Values and assign index and value to urlParm.
    for(let kv of kvpairs) {
        let keyValue = kv.split("=");
        let key = keyValue[0];
        let value = keyValue[1];
        console.log("Key is ", key, ", Value is", value);
        urlParm[key] = value;
    }

    console.log(urlParm);
    return urlParm;
}

