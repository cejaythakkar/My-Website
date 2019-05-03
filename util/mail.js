const nodeMailer = require('nodeMailer'),
      sendGridTransport = require('nodemailer-sendgrid-transport'),
      transporter = nodeMailer.createTransport(sendGridTransport({
          auth:{
              api_key:'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'
          }
      }));
      
exports.sendMail = (mailConfig) => {
    return transporter.sendMail(mailConfig)
}