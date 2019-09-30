// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACc54a50a0b57b10e904bb962994a2dbbf';
const authToken = '3dcf35ec733840a33b0228e965df6f1f';
const client = require('twilio')(accountSid, authToken);

client.messages.list({
    dateSentBefore: new Date(Date.UTC(2019, 8, 1, 0, 0, 0)),
    dateSentAfter: new Date(Date.UTC(2019, 7, 1, 0, 0, 0))
        })
        .then(messages => messages.forEach(m => {
          console.log(`${m.sid},${m.from},${m.to},${m.date_sent},${m.body},${m.direction},`)
        }));
