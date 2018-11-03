document.onload = function() { // UPDATE NOW!
let gscript = document.createElement('script');
gscript.src = 'https://apis.google.com/js/api.js';
gscript.async = true;
gscript.defer = true;
document.body.appendChild(gscript);
gscript.onload = function() {
      handleClientLoad();
}

var CLIENT_ID = '1059757562983-o8p9bj4l12gkrj5orekusauom3tlien5.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyD7A_fA6gtbxXs-sqdeC3oplUVr1zzSZ2U';
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        });
      }

      window.Sheets = {
        read: function(range) {
          gapi.client.sheets.spreadsheets.values.get({
           spreadsheetId: '1y9AiKbLUZ9MiZQZpAtqubu0Eg1iLrhYTjUpIuBmI2k0', // Sheets id
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
               for (let j = 0; j < 10; j++) {
                app[app.length] = row[j];     
               }
                   data[data.length] = app;
             }
             return data;
           } else {
             return 'No data found';
           }
          }, function(response) {
           return 'Error ' + response.result.error.message
          });
        },
      }
 }
