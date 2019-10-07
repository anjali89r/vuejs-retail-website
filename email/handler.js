// 'use strict';
// const Handlebars = require('handlebars');
// const AWS = require('aws-sdk');
// let csvToJson = require('convert-csv-to-json')
// const s3 = new AWS.S3({
//   apiVersion: '2006-03-01',
//   region: process.env.AWSREGION,
// });
// const s3bucket = 'ekatvaemail';
// const emailtemplate = 'amazoncustomeremail.html';

// module.exports.postprocess = async (event) => {
//   // console.log('Received event:', JSON.stringify(event, null, 2));
//   const record = event.Records[0];
//   // Retrieve the email from your bucket
//   const request = {
//     Bucket: s3bucket,
//     Key: emailtemplate
//   };
//   const emaildatakey = {
//     Bucket: s3bucket,
//     Key: record.s3.object.key
//   };

//   try {
//     const emailcsv = await s3.getObject(emaildatakey).promise();
//     const data = await s3.getObject(request).promise();
//     console.log('Raw email:' + data.Body);
//     console.log('actual email:' + data);
//     var emailHtmlTemplate = data.toString("utf8")
//     var templateHtml = Handlebars.compile(emailHtmlTemplate);
//     let json = csvToJson.fieldDelimiter(',').getJsonFromCsv(emailcsv);
// for(let i=0; i<json.length;i++){
//     var emaildata = json[i];
//     var bodyHtml = templateHtml(emaildata);
//         console.log('with name email:' + bodyHtml);
// }



//   } catch (Error) {
//     console.log(Error, Error.stack);
//     return Error;
//   }
// };


// var aws = require('aws-sdk');
// var ses = new aws.SES();

// exports.handler = (event, context, callback) => {

//      var params = {
//         Destination: {
//             ToAddresses: ["recipientEmailAddress"]
//         },
//         Message: {
//             Body: {
//                 Text: { Data: "Test"

//                 }

//             },

//             Subject: { Data: "Test Email"

//             }
//         },
//         Source: "ekatvagms@gmail.com"
//     };


//      ses.sendEmail(params, function (err, data) {
//         callback(null, {err: err, data: data});
//         if (err) {
//             console.log(err);
//             context.fail(err);
//         } else {

//             console.log(data);
//             context.succeed(event);
//         }
//     });
// };
