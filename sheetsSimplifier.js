
      // Client ID and API key from the Developer Console
      var CLIENT_ID = '1059757562983-o8p9bj4l12gkrj5orekusauom3tlien5.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyD7A_fA6gtbxXs-sqdeC3oplUVr1zzSZ2U';
      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";
      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }
      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES
        });
      }
      /**
       * Print the names and majors of students in a sample spreadsheet:
       * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
       */
      let Sheets = {
        read: function(range) {
          gapi.client.sheets.spreadsheets.values.get({
           spreadsheetId: '1y9AiKbLUZ9MiZQZpAtqubu0Eg1iLrhYTjUpIuBmI2k0', // Sheets id
           range: `Sheet1!${range}`,
          }).then(function(response) {
           var range = response.result;
           if (range.values.length > 0) {
             let data = {};
             for (i = 0; i < range.values.length; i++) {
               var row = range.values[i];
               appendPre(row[0] + ', ' + row[1] + ', ' + row[2] + ', ' + row[3] + ', ' + row[4] + ', ' + row[5]
             }
           } else {
             appendPre('No data found.');
           }
          }, function(response) {
           appendPre('Error ' + response.result.error.message);
          });
        },
      }
