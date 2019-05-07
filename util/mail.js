const nodeMailer = require('nodemailer'),
      sendGridTransport = require('nodemailer-sendgrid-transport'),
      transporter = nodeMailer.createTransport(sendGridTransport({
          auth:{
              api_key:'your_apu_key'
          }
      }));
      
exports.sendMail = (mailConfig) => {
    return transporter.sendMail(mailConfig)
}