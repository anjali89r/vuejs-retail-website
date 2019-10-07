'use strict';


const AWS = require('aws-sdk');

const ses = new AWS.SES();


const handler = (event, context, callback) => {

    console.log('Welcome');
    console.log('event: ' + JSON.stringify(event));

    var params = {
      Destination: {
          ToAddresses: ["ekatvagms@gmail.com"]
      },
      Message: {
          Body: {
              Text: { Data: "Test"

              }

          },

          Subject: { Data: "Test Email"

          }
      },
      Source: "ekatvagms@gmail.com"
  };


   ses.sendEmail(params, function (err, data) {
      callback(null, {err: err, data: data});
      if (err) {
          console.log(err);
          context.fail(err);
      } else {

          console.log(data);
          context.succeed(event);
      }
  });

};


module.exports = {
    handler
};
