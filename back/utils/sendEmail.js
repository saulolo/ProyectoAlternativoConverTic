const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "saul_he@hotmail.com",
          pass: "pdnqsomrcvlufykc"
        }
      });
      const mensaje={
        from: "ConverTic Shop Store <saul_he@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
      }
      
      await transport.sendMail(mensaje)
}

module.exports= sendEmail;