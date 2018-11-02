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
