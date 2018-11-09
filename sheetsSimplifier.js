
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
        });
      }

      let Sheets = {
        result: '',
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
               app = row;
                   data[data.length] = app;
             }
             Sheets.result = data;
           } else {
             Sheets.result = 'No data found';
           }
          }, function(response) {
           Sheets.result = 'Error ' + response.result.error.message
          });
        },
        write: function(range, value) {
                gapi.client.sheets.spreadsheets.values.update({
                   spreadsheetId: '1y9AiKbLUZ9MiZQZpAtqubu0Eg1iLrhYTjUpIuBmI2k0',
                   range: 'A3',
                   valueInputOption: 'USER_ENTERED',
                   resource: {values:[[value]]}
                }).then((response) => {
                  var result = response.result;
                  console.log(`${result.updatedCells} cells updated.`);
                });      
        },
      }
      let signIn = () => {
          gapi.auth2.getAuthInstance().signIn()
      }
      let checkIfSignedIn = () => {
              
      }
gscript.onload = function() {
        gapi.load('client:auth2', initClient);
      checkIfSignedIn();
}
