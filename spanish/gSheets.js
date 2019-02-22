let gscript = document.createElement('script');
gscript.src = 'https://apis.google.com/js/api.js';
gscript.async = true;
gscript.defer = true;
document.body.appendChild(gscript);

var CLIENT_ID = '1059757562983-o8p9bj4l12gkrj5orekusauom3tlien5.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyD7A_fA6gtbxXs-sqdeC3oplUVr1zzSZ2U';
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        }).then(function() {
              if (typeof updateSigninStatus == 'function') {
                   updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());    
              }
        });
      }

      let Sheets = {
        url: '',
        result: '',
        read: function(range, func, url) {
          if (!url) {
                url = Sheets.url;
                if (!url) {
                  console.error("Google Sheets does not exist or the URL is wrong");
                  return false;
                }
          }
          gapi.client.sheets.spreadsheets.values.get({
           spreadsheetId: url, // Sheets id
           range: `Sheet1!${range}`,
          }).then(function(response) {
           var range = response.result;
           if (range.values.length > 0) {
             let data = [];
             let nums = {
                  A: 1,
                  B: 2,
                  C: 3,
                  D: 4,
                  E: 5,
                  F: 6,
                  G: 7,
             }
             for (let i = 0; i < range.values.length; i++) {
               var row = range.values[i];
               let app = [];
               app = row;
                   data[data.length] = app;
             }
             Sheets.result = data;
             func();
           } else {
             Sheets.result = 'No data found';
           }
          }, function(response) {
           Sheets.result = 'Error ' + response.result.error.message
          });
        },
        write: function(range, value, callback, url) {
                if (!url) {
                      url = Sheets.url;
                      if (!url) {
                        console.error("Google Sheets does not exist or the URL is wrong");
                        return false;
                      }
                }
                gapi.client.sheets.spreadsheets.values.update({
                   spreadsheetId: url,
                   range: range,
                   valueInputOption: 'USER_ENTERED',
                   resource: {values:[[value]]}
                }).then((response) => {
                  var result = response.result;
                  if (typeof(callback) == 'function') {
                        callback();
                  }
                });      
        },
      }
      let signIn = () => {
          gapi.auth2.getAuthInstance().signIn().then(function() {location = location})
      }
      let signOut = () => {
          gapi.auth2.getAuthInstance().signOut().then(function() {location = location})
      }
gscript.onload = function() {
        gapi.load('client:auth2', initClient);
}
