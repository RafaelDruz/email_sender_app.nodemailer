
const nodemailer = require('nodemailer')
const { host, port, user, pass } = require('./passwords.json')

function Transport() {
  return nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
  });
}

function Message(confirmLink) {
  return {
    from: "myemail@gmail.com",
    to: "client@gmail.com",
    subject: "Confirm Email",
    text: `${confirmLink}`,
    html: `<p><a href="${confirmLink}">${confirmLink}</a></p>`
  };
}

module.exports = { Transport, Message };

